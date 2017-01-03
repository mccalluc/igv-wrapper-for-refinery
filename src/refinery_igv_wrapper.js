requirejs.config({
  "paths": {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
    "jquery_ui": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min",
    "igv": "https://igv.org/web/release/1.0.1/igv-1.0.1"
  }
});
define(['refinery', 'jquery', 'jquery_ui', 'igv'],
    function (refinery, $) {
      return function (query) {
        if (!query.genome) {
          query.genome = prompt('Provide a genome build code, like "hg19"', 'hg19');
        }

        var $head = $('head');
        [
          'https://fonts.googleapis.com/css?family=PT+Sans:400,700',
          'https://fonts.googleapis.com/css?family=Open+Sans',
          'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css',
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css',
          'https://igv.org/web/release/1.0.1/igv-1.0.1.css'
        ].forEach(function (css_url) {
          $head.append('<link href="' + css_url + '" rel="stylesheet" type="text/css">');
        });

        if (!query.uuids) {
          alert("'uuids' parameter is missing");
          throw new Error("'uuids' parameter is missing");
        }
        var promises = query.uuids.map(function (uuid) {
          return refinery.node(uuid);
        });

        Promise.all(promises).then(function (promises) {
          var tracks = promises.map(function (promise) {
            var igv_track = {
              name: promise.relative_file_store_item_url.replace(/.*\//, ''),
              url: promise.relative_file_store_item_url,
              format: promise.file_extension
            };
            if (promise.file_extension === "bam") {
              igv_track.indexURL = promise.auxiliary_nodes[0];
            }
            return igv_track;
          });

          var url_base = "https://s3.amazonaws.com/data.cloud.refinery-platform.org/data/igv-reference/" + query.genome + "/";
          var genome_reference = {
            "fasta_url": url_base + query.genome + ".fa",
            "index_url": url_base + query.genome + ".fa.fai",
            "cytoband_url": url_base + "cytoBand.txt",
            "bed_url": url_base + "refGene.bed",
            "tbi_url": url_base + "refGene.bed.tbi"
          };

          tracks.push({
            name: "Genes",
            type: "annotation",
            format: "bed",
            sourceType: "file",
            url: genome_reference.bed_url,
            indexURL: genome_reference.tbi_url,
            order: Number.MAX_VALUE,
            visibilityWindow: 300000000,
            displayMode: "EXPANDED"
          });

          var options = {
            reference: {
              fastaURL: genome_reference.fasta_url,
              indexURL: genome_reference.index_url,
              cytobandURL: genome_reference.cytoband_url
            },
            tracks: tracks
          };

          igv.createBrowser($("#target")[0], options);
        });
      };
    }
);