# dash-class
> A simple light-weight javascript utility for the class attribute.

dash-class is a simple, light-weight javascript utility module for class attribute manipulation. These include jQuery inspired `<x>Class` functions (`hasClass`, `addClass`, etc.), hence the name.

### Table of Contents
* [Installation](#installation)
* [Methods](#methods)
* [License](#license)

### Installation
##### Clone the repository
```
git clone https://github.com/achillesrasquinha/dash-class.git
```

##### Install using npm
```
npm install dash-class
```

##### Install using bower
```
bower install dash-class
```

In your HTML file
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    ...
    <script src="/path/to/_class.js"></script>
  </body>
</html>
```

### Methods
* `_class.get(element)`
```javascript
<= _class.get(document.body);
=> Array [ "class1", "class2", "class3" ];
```
| Return        | Description                                                 |
| ------------- | :---------------------------------------------------------- |
| Array<String> | Retrives a list of classname(s) associated with the element |

* `_class.has(element, class [, all = true)`
```javascript
// Pass a single class name.
_class.has(element, 'class1');
=> true

// ...or a list of 'em.
_class.has(element, ['class1', 'class2']);
=> false

// ...or any of 'em.
_class.has(element, ['class1', 'class2'], false);
=> true
```
| Return        | Description                                                 |
| ------------- | :---------------------------------------------------------- |
| Boolean       | Determines whether the element has all/any of the class(es) |

* `_class.add(element, class [)`
```javascript
// Pass a single class name.
_class.add(element, 'class1');

// ...or a list of 'em.
_class.add(element, ['class1', 'class2']);
```
| Return        | Description                                                 |
| ------------- | :---------------------------------------------------------- |
| void          | Adds the said class(es) to the element                      |

* `_class.remove(element, class [)`
```javascript
// Pass a single class name.
_class.remove(element, 'class1');

// ...or a list of 'em.
_class.remove(element, ['class1', 'class2']);
```
| Return        | Description                                                 |
| ------------- | :---------------------------------------------------------- |
| void          | Removes the said class(es) to the element                   |

* `_class.toggle(element, class [, state = true)`
```javascript
// Pass a single class name.
_class.toggle(element, 'class1');

// ...or a list of 'em.
_class.toggle(element, ['class1', 'class2']);
```
| Return        | Description                                                 |
| ------------- | :---------------------------------------------------------- |
| void          | Adds/Removes the class(es) if present or no.                |

* `_class.replace(element, object)`
```javascript
// Replace a single class
_class.replace(element, { class1: 'class2' });

// ...or a list of 'em.
_class.replace(element, { class2: ['class2', 'class3'], class4: ['class5', 'class6'] });
```
| Return        | Description                                                 |
| ------------- | :---------------------------------------------------------- |
| void          | Replaces the class(es) mentioned.                           |

### License
Code released under the [MIT License](http://github.com/achillesrasquinha/dash-class/blob/master/LICENSE).