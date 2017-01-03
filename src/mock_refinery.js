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

