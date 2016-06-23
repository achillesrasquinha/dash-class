var _class = _class || {};

_class.get = function(element) {
    var clsss = element.getAttribute('class') || '';

    return clsss === '' ? [] : clsss.split(/\s+/g);
};

_class.has = function(element, clss, all) {
    var has = true;
    all = all === undefined ? true : all;

    if (element.nodeType === Node.ELEMENT_NODE) {
        if (clss instanceof Array) {
            clss.forEach(function(value) {
                if (all)
                    has = has && _class.has(element, value);
                else
                    has = has || _class.has(element, value);
            });
        } else
        if (_class.get(element).indexOf(clss) === -1)
            has = false;
    }

    return has;
};

_class.add = function(element, clss) {
    if (clss instanceof Array)
        clss.forEach(function(value) {
            _class.add(element, value);
        });
    else
    if (!_class.has(element, clss))
        element.className += (element.className === '' ? '' : ' ') + clss;
};

_class.remove = function(element, clss) {
    if (clss instanceof Array)
        clss.forEach(function(value) {
            _class.remove(element, value);
        });
    else
    if (_class.has(element, clss)) {
        var clsss = _class.get(element, clss);
        clsss.splice(clsss.indexOf(clss), 1);

        element.className = "";

        _class.add(element, clsss);
    }
};

_class.toggle = function(element, clss, state) {
    state = state === undefined ? true : false;

    if (!_class.has(element, clss) && state)
        _class.add(element, clss);
    else
        _class.remove(element, clss);
};

_class.replace = function(element, clss) {
    for (var key in clss) {
        _class.remove(element, key);
        _class.add(element, clss[key]);
    }
};

if (typeof module === 'object' && module.exports) {
    module.exports = _class;
}