define([],
    function () {
      return {
        parse_query: function () {
          // From http://stackoverflow.com/a/8486188
          var query = location.search.substr(1);
          var result = {};
          query.split("&").forEach(function (part) {
            if (!part) return;
            part = part.split("+").join(" ");
            var eq = part.indexOf("=");
            var key = eq > -1 ? part.substr(0, eq) : part;
            var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : "";
            var from = key.indexOf("[");
            if (from == -1) result[decodeURIComponent(key)] = val;
            else {
              var to = key.indexOf("]");
              var index = decodeURIComponent(key.substring(from + 1, to));
              key = decodeURIComponent(key.substring(0, from));
              if (!result[key]) result[key] = [];
              if (!index) result[key].push(val);
              else result[key][index] = val;
            }
          });
          return result;
        },
        node: function (uuid) {
          switch (uuid) {
            case 'mock-uuid-1':
              return new Promise(function (resolve, _reject) {
                resolve({
                  "uuid": "mock-uuid-1",
                  "name": "http://stemcellcommons.org/sites/default/files/chipseq/11610/GATA6%20ChIP-seq%20in%20differentiated%20cells%20+%20Caco2%20cell%20input%20DNA.bed",
                  "type": "Derived Data File",
                  "analysis_uuid": null,
                  "subanalysis": null,
                  "assay": "Measurement: transcription factor binding site identification; Technology: nucleotide sequencing; Platform: Illumina Genome Analyzer II; File: a_11610.txt",
                  "study": "11610: Transcription factor binding during intestinal cell differentiation [TFB]",
                  "relative_file_store_item_url": null,
                  "parent_nodes": [
                    "ac0cdf9f-abb9-46b1-9b46-27c6be27be05"
                  ],
                  "child_nodes": [],
                  "auxiliary_nodes": [],
                  "is_auxiliary_node": false,
                  "file_extension": "bed",
                  "auxiliary_file_generation_task_state": null,
                  "ready_for_igv_detail_view": true,
                  "file_uuid": "528120a0-374b-42a4-977c-c25c0608c93b"
                })
              });
            case 'mock-uuid-2':
              return new Promise(function (resolve, _reject) {
                resolve({
                  "uuid": "mock-uuid-2",
                  "name": "http://stemcellcommons.org/sites/default/files/chipseq/11610/GATA6%20ChIP-seq%20in%20differentiated%20cells%20+%20Caco2%20cell%20input%20DNA.bed",
                  "type": "Derived Data File",
                  "analysis_uuid": null,
                  "subanalysis": null,
                  "assay": "Measurement: transcription factor binding site identification; Technology: nucleotide sequencing; Platform: Illumina Genome Analyzer II; File: a_11610.txt",
                  "study": "11610: Transcription factor binding during intestinal cell differentiation [TFB]",
                  "relative_file_store_item_url": null,
                  "parent_nodes": [
                    "ac0cdf9f-abb9-46b1-9b46-27c6be27be05"
                  ],
                  "child_nodes": [],
                  "auxiliary_nodes": [],
                  "is_auxiliary_node": false,
                  "file_extension": "bed",
                  "auxiliary_file_generation_task_state": null,
                  "ready_for_igv_detail_view": true,
                  "file_uuid": "528120a0-374b-42a4-977c-c25c0608c93b"
                })
              });
          }
        }
      };
    }
);

