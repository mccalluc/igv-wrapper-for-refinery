define([],
    function () {
      return {
        parse_query: function () {
          // TODO
          return {
            uuids: ['mock-uuid-1', 'mock-uuid-2'],
            vis: 'refinery_igv_wrapper'
          }
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

