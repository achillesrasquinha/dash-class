var _class     = _class || { };

_class.get     = function (element) {
    var clsss  = [ ];

    if (element.nodeType === Node.ELEMENT_NODE)
        if (element.getAttribute) {
            var clss = element.getAttribute('class') || '';

            if (clss !== '')
                clsss  = clss.split(/\s+/g);
        }

    return clsss;
};

_class.has     = function (element, clss, all) {
    var has    = true;
        all    = all === undefined ? true : all;

    if ( element.nodeType === Node.ELEMENT_NODE ) {
        if (clss instanceof Array) {
            var nhas = !has;

            clss.forEach(function (value) {
                if ( all )
                     has =  has && _class.has(element, value, all);
                else
                    nhas = nhas || _class.has(element, value, all);
            });

            has = all ? has : nhas;
        }
        else
            if ( _class.get(element).indexOf(clss) === -1 )
                has = false;
    }

    return has;
};

_class.add     = function (element, clss) {
    if ( clss instanceof Array )
        clss.forEach(function (value) {
            _class.add(element, value);
        });
    else
        if(!_class.has(element, clss))
            element.className += (element.className === '' ? '' : ' ') + clss;
};

_class.remove  = function (element, clss) {
    if ( clss instanceof Array )
        clss.forEach(function (value) {
            _class.remove(element, value);
        });
    else
        if(_class.has(element, clss)) {
            var clsss = _class.get(element);
                clsss = clsss.filter(function (value) {
                return value !== clss;
            });

            element.className = '';

            _class.add(element, clsss);
        }
};

_class.toggle  = function (element, clss, state) {
    state      = state === undefined ? true : state;

    if (!_class.has(element, clss) && state)
        _class.add(element, clss);
    else
        _class.remove(element, clss);
};

_class.replace = function (element, clss) {
    for (var key in clss) {
        _class.remove(element, key );
        _class.add   (element, clss[key]);
    }
};

if ( typeof module === 'object' && module.exports ) {
    module.exports = _class;
}