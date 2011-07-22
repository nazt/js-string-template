var string_template = function (template, replace) {
    'use strict';
    var temp = template.split("$"),
        output;
    if (replace.toString() === "[object Object]") {
        replace = (function () {
            var replace_filtered = [],
                i,
                length = 0;
            for (i in replace) {
                if (replace.hasOwnProperty(i)) {
                    if (typeof parseInt(i, 10) === "number") {
                        replace_filtered[i] = replace[i];
                        length += 1;
                    }
                }
            }
            return replace_filtered;
        })();
    }
    if (replace[0] == undefined) {
        return undefined;
    }
    if (temp[1].toString().trim() === "{0}") {
        if (typeof replace === "object" && replace.length && typeof replace.toString() === "string") {
            output = temp[0] + replace[0];
        }
        else {
            output = temp[0] + replace;
        }
    }
    return output;
};

