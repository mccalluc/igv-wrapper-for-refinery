define([],
    function () {
      return {
        node: function (uuid) {
          switch (uuid) {
            case 'mock-uuid-1':
              return new Promise(function (resolve, _reject) {
                var data_uri = "data:text/plain," + encodeURIComponent('chr1 0 100000000 demo');
                resolve({
                  "relative_file_store_item_url": data_uri,
                  "auxiliary_nodes": [],
                  "file_extension": "bed"
                });
              });
            case 'mock-uuid-2':
              return new Promise(function (resolve, _reject) {
                var data_uri = "data:text/plain," + encodeURIComponent('chr1 100000000 200000000 demo');
                resolve({
                  "relative_file_store_item_url": data_uri,
                  "auxiliary_nodes": [],
                  "file_extension": "bed"
                });
              });
          }
        }
      };
    }
);

