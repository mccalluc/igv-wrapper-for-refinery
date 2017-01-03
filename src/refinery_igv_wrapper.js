requirejs.config({
  "paths": {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min",
    "jquery_ui": "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min",
    "igv": "https://igv.org/web/release/1.0.1/igv-1.0.1"
  }
});
define(['refinery', 'jquery', 'jquery_ui', 'igv'],
    function (refinery, $) {
      return function () {
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

        var target = $('#target');

        var options = {
          palette: ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841"],
          locus: "7:55,085,725-55,276,031",

          reference: {
            id: "hg19",
            fastaURL: "//igv.broadinstitute.org/genomes/seq/1kg_v37/human_g1k_v37_decoy.fasta",
            cytobandURL: "//igv.broadinstitute.org/genomes/seq/b37/b37_cytoband.txt"
          },

          trackDefaults: {
            bam: {
              coverageThreshold: 0.2,
              coverageQualityWeight: true
            }
          },

          tracks: [
            {
              name: "Genes",
              url: "//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed",
              index: "//igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed.idx",
              displayMode: "EXPANDED"
            }
          ]
        };

        var browser = igv.createBrowser(target[0], options);
      };
    }
);