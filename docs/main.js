(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.multiline) { flags += 'm'; }
	if (options.caseInsensitive) { flags += 'i'; }

	try
	{
		return $elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return $elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		out.push(A4($elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch
				? $elm$core$Maybe$Just(submatch)
				: $elm$core$Maybe$Nothing;
		}
		return replacer(A4($elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;
var $author$project$Main$LinkClicked = function (a) {
	return {$: 'LinkClicked', a: a};
};
var $author$project$Main$UrlChanged = function (a) {
	return {$: 'UrlChanged', a: a};
};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$application = _Browser_application;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Main$Image = {$: 'Image'};
var $author$project$Main$InventoryAsCards = {$: 'InventoryAsCards'};
var $author$project$Main$NavbarMsg = function (a) {
	return {$: 'NavbarMsg', a: a};
};
var $author$project$Main$Text = {$: 'Text'};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Cards$Brawn = {$: 'Brawn'};
var $author$project$Cards$Discipline = {$: 'Discipline'};
var $author$project$Cards$Fortune = {$: 'Fortune'};
var $author$project$Cards$Reflex = {$: 'Reflex'};
var $author$project$Cards$UnknownAffinity = {$: 'UnknownAffinity'};
var $elm$core$String$toLower = _String_toLower;
var $author$project$Cards$parseAffinity = function (str) {
	var _v0 = $elm$core$String$toLower(str);
	switch (_v0) {
		case 'discipline':
			return $author$project$Cards$Discipline;
		case 'reflex':
			return $author$project$Cards$Reflex;
		case 'brawn':
			return $author$project$Cards$Brawn;
		case 'fortune':
			return $author$project$Cards$Fortune;
		default:
			return $author$project$Cards$UnknownAffinity;
	}
};
var $author$project$Cards$Defense = {$: 'Defense'};
var $author$project$Cards$Mobility = {$: 'Mobility'};
var $author$project$Cards$Offense = {$: 'Offense'};
var $author$project$Cards$UnknownKind = {$: 'UnknownKind'};
var $author$project$Cards$Utility = {$: 'Utility'};
var $author$project$Cards$parseKind = function (str) {
	var _v0 = $elm$core$String$toLower(str);
	switch (_v0) {
		case 'utility':
			return $author$project$Cards$Utility;
		case 'offense':
			return $author$project$Cards$Offense;
		case 'defense':
			return $author$project$Cards$Defense;
		case 'mobility':
			return $author$project$Cards$Mobility;
		default:
			return $author$project$Cards$UnknownKind;
	}
};
var $author$project$Cards$Accomplishment = function (a) {
	return {$: 'Accomplishment', a: a};
};
var $author$project$Cards$Alley = function (a) {
	return {$: 'Alley', a: a};
};
var $author$project$Cards$BridgeTown = {$: 'BridgeTown'};
var $author$project$Cards$Clinic = function (a) {
	return {$: 'Clinic', a: a};
};
var $author$project$Cards$FortHope = {$: 'FortHope'};
var $author$project$Cards$GrantsBrewHouse = {$: 'GrantsBrewHouse'};
var $author$project$Cards$KnuckleHouse = {$: 'KnuckleHouse'};
var $author$project$Cards$KscConvoy = {$: 'KscConvoy'};
var $author$project$Cards$Liberators = {$: 'Liberators'};
var $author$project$Cards$Nest = function (a) {
	return {$: 'Nest', a: a};
};
var $author$project$Cards$PaulsAlley = {$: 'PaulsAlley'};
var $author$project$Cards$RovingMerchants = function (a) {
	return {$: 'RovingMerchants', a: a};
};
var $author$project$Cards$Starter = function (a) {
	return {$: 'Starter', a: a};
};
var $author$project$Cards$StarterDeck = {$: 'StarterDeck'};
var $author$project$Cards$Strip = function (a) {
	return {$: 'Strip', a: a};
};
var $author$project$Cards$TheClinic = {$: 'TheClinic'};
var $author$project$Cards$TheCrowsNest = {$: 'TheCrowsNest'};
var $author$project$Cards$TheFurnace = {$: 'TheFurnace'};
var $author$project$Cards$TheStilts = {$: 'TheStilts'};
var $author$project$Cards$TheStrip = {$: 'TheStrip'};
var $author$project$Cards$UnknownTrack = F2(
	function (a, b) {
		return {$: 'UnknownTrack', a: a, b: b};
	});
var $author$project$Cards$parseSupplyTrack = F2(
	function (track, name) {
		switch (track) {
			case 'Alley':
				switch (name) {
					case 'Paul\'s Alley':
						return $author$project$Cards$Alley($author$project$Cards$PaulsAlley);
					case 'The Stilts':
						return $author$project$Cards$Alley($author$project$Cards$TheStilts);
					case 'Fort Hope':
						return $author$project$Cards$Alley($author$project$Cards$FortHope);
					default:
						return A2($author$project$Cards$UnknownTrack, track, name);
				}
			case 'Clinic':
				switch (name) {
					case 'The Clinic':
						return $author$project$Cards$Clinic($author$project$Cards$TheClinic);
					case 'The Furnace':
						return $author$project$Cards$Clinic($author$project$Cards$TheFurnace);
					case 'Grant\'s Brew House':
						return $author$project$Cards$Clinic($author$project$Cards$GrantsBrewHouse);
					default:
						return A2($author$project$Cards$UnknownTrack, track, name);
				}
			case 'Nest':
				switch (name) {
					case 'The Crow\'s Nest':
						return $author$project$Cards$Nest($author$project$Cards$TheCrowsNest);
					case 'Crow\'s Nest':
						return $author$project$Cards$Nest($author$project$Cards$TheCrowsNest);
					case 'Bridge Town':
						return $author$project$Cards$Nest($author$project$Cards$BridgeTown);
					case 'Knuckle House':
						return $author$project$Cards$Nest($author$project$Cards$KnuckleHouse);
					default:
						return A2($author$project$Cards$UnknownTrack, track, name);
				}
			case 'Starter':
				if (name === 'Starter Deck') {
					return $author$project$Cards$Starter($author$project$Cards$StarterDeck);
				} else {
					return A2($author$project$Cards$UnknownTrack, track, name);
				}
			case 'Strip':
				if (name === 'The Strip') {
					return $author$project$Cards$Strip($author$project$Cards$TheStrip);
				} else {
					return A2($author$project$Cards$UnknownTrack, track, name);
				}
			case 'Accomplishment':
				return $author$project$Cards$Accomplishment(name);
			case 'Roving Merchants':
				switch (name) {
					case 'Liberators':
						return $author$project$Cards$RovingMerchants($author$project$Cards$Liberators);
					case 'KSC Convoys':
						return $author$project$Cards$RovingMerchants($author$project$Cards$KscConvoy);
					default:
						return A2($author$project$Cards$UnknownTrack, track, name);
				}
			default:
				return A2($author$project$Cards$UnknownTrack, track, name);
		}
	});
var $author$project$Cards$parseSupplyLine = function (raw) {
	var track = A2($author$project$Cards$parseSupplyTrack, raw.track, raw.name);
	return {index: raw.index, name: track, tier: raw.tier};
};
var $author$project$Cards$parseRawCard = function (raw) {
	var line = $author$project$Cards$parseSupplyLine(raw.supplyLine);
	return {
		affinity: $author$project$Cards$parseAffinity(raw.affinity),
		cost: raw.cost,
		effects: raw.effects,
		filename: raw.filename,
		id: raw.id,
		kind: $author$project$Cards$parseKind(raw.kind),
		properties: A2(
			$elm$core$List$map,
			function (p) {
				return {description: p};
			},
			raw.properties),
		supplyLine: line,
		title: raw.name,
		totalCost: raw.totalCost
	};
};
var $author$project$Tags$AbsoluteCurrent = function (a) {
	return {$: 'AbsoluteCurrent', a: a};
};
var $author$project$Tags$AbsoluteMax = function (a) {
	return {$: 'AbsoluteMax', a: a};
};
var $author$project$Tags$AccessoryDamage = {$: 'AccessoryDamage'};
var $author$project$Tags$Accuracy = {$: 'Accuracy'};
var $author$project$Tags$AcidResistance = {$: 'AcidResistance'};
var $author$project$Tags$AimSpeed = {$: 'AimSpeed'};
var $author$project$Tags$AimingDownSights = {$: 'AimingDownSights'};
var $author$project$Tags$AimingDownSightsMoveSpeed = {$: 'AimingDownSightsMoveSpeed'};
var $author$project$Tags$AmmoCapacity = {$: 'AmmoCapacity'};
var $author$project$Tags$AmmoRefill = {$: 'AmmoRefill'};
var $author$project$Tags$AnyEnemy = {$: 'AnyEnemy'};
var $author$project$Tags$BulletDamage = {$: 'BulletDamage'};
var $author$project$Tags$BulletPenetration = {$: 'BulletPenetration'};
var $author$project$Tags$BulletStumble = {$: 'BulletStumble'};
var $author$project$Tags$Copper = {$: 'Copper'};
var $author$project$Tags$Damage = {$: 'Damage'};
var $author$project$Tags$DamageResistance = {$: 'DamageResistance'};
var $author$project$Tags$DealingFriendlyFire = {$: 'DealingFriendlyFire'};
var $author$project$Tags$Disables = function (a) {
	return {$: 'Disables', a: a};
};
var $author$project$Tags$EffectiveRange = {$: 'EffectiveRange'};
var $author$project$Tags$ExplosiveDamage = {$: 'ExplosiveDamage'};
var $author$project$Tags$ExplosiveResistance = {$: 'ExplosiveResistance'};
var $author$project$Tags$FireResistance = {$: 'FireResistance'};
var $author$project$Tags$ForSeconds = function (a) {
	return {$: 'ForSeconds', a: a};
};
var $author$project$Tags$Health = {$: 'Health'};
var $author$project$Tags$InDistance = F2(
	function (a, b) {
		return {$: 'InDistance', a: a, b: b};
	});
var $author$project$Tags$Lifes = {$: 'Lifes'};
var $author$project$Tags$Many = function (a) {
	return {$: 'Many', a: a};
};
var $author$project$Tags$MeleeDamage = {$: 'MeleeDamage'};
var $author$project$Tags$MeleeDamageAgainstMutation = {$: 'MeleeDamageAgainstMutation'};
var $author$project$Tags$MeleeStumble = {$: 'MeleeStumble'};
var $author$project$Tags$MoveSpeed = {$: 'MoveSpeed'};
var $author$project$Tags$Mutation = {$: 'Mutation'};
var $author$project$Tags$OffensiveAccessoryCount = {$: 'OffensiveAccessoryCount'};
var $author$project$Tags$OnDealingMeleeDamageTo = function (a) {
	return {$: 'OnDealingMeleeDamageTo', a: a};
};
var $author$project$Tags$OnIncapacitated = function (a) {
	return {$: 'OnIncapacitated', a: a};
};
var $author$project$Tags$OnKill = function (a) {
	return {$: 'OnKill', a: a};
};
var $author$project$Tags$OnLootCopper = {$: 'OnLootCopper'};
var $author$project$Tags$OnMeleeKill = {$: 'OnMeleeKill'};
var $author$project$Tags$OnPrecisionKill = {$: 'OnPrecisionKill'};
var $author$project$Tags$OnTakingPainMeds = {$: 'OnTakingPainMeds'};
var $author$project$Tags$OnWeaponChanged = {$: 'OnWeaponChanged'};
var $author$project$Tags$Once = F2(
	function (a, b) {
		return {$: 'Once', a: a, b: b};
	});
var $author$project$Tags$OverTime = F2(
	function (a, b) {
		return {$: 'OverTime', a: a, b: b};
	});
var $author$project$Tags$Passive = F2(
	function (a, b) {
		return {$: 'Passive', a: a, b: b};
	});
var $author$project$Tags$PlayerAimingDownSights = {$: 'PlayerAimingDownSights'};
var $author$project$Tags$PlayerAttacking = {$: 'PlayerAttacking'};
var $author$project$Tags$PlayerCrouching = {$: 'PlayerCrouching'};
var $author$project$Tags$PlayerUsingMedicalAccessory = {$: 'PlayerUsingMedicalAccessory'};
var $author$project$Tags$PlayerUsingMeleeWeapon = {$: 'PlayerUsingMeleeWeapon'};
var $author$project$Tags$PlayerUsingPistol = {$: 'PlayerUsingPistol'};
var $author$project$Tags$PlayerUsingRifle = {$: 'PlayerUsingRifle'};
var $author$project$Tags$PlayerUsingShotgun = {$: 'PlayerUsingShotgun'};
var $author$project$Tags$PlayerUsingSniper = {$: 'PlayerUsingSniper'};
var $author$project$Tags$QuickAccessoryCount = {$: 'QuickAccessoryCount'};
var $author$project$Tags$RelativeChance = F2(
	function (a, b) {
		return {$: 'RelativeChance', a: a, b: b};
	});
var $author$project$Tags$RelativeMax = function (a) {
	return {$: 'RelativeMax', a: a};
};
var $author$project$Tags$ReloadSpeed = {$: 'ReloadSpeed'};
var $author$project$Tags$Ridden = {$: 'Ridden'};
var $author$project$Tags$SelfOrTeammate = {$: 'SelfOrTeammate'};
var $author$project$Tags$Special = function (a) {
	return {$: 'Special', a: a};
};
var $author$project$Tags$Stamina = {$: 'Stamina'};
var $author$project$Tags$StaminaEfficiency = {$: 'StaminaEfficiency'};
var $author$project$Tags$StaminaRegeneration = {$: 'StaminaRegeneration'};
var $author$project$Tags$SupportAccessoryCount = {$: 'SupportAccessoryCount'};
var $author$project$Tags$SwapSpeed = {$: 'SwapSpeed'};
var $author$project$Tags$TakingFriendlyFire = {$: 'TakingFriendlyFire'};
var $author$project$Tags$Team = function (a) {
	return {$: 'Team', a: a};
};
var $author$project$Tags$TemporaryHealth = {$: 'TemporaryHealth'};
var $author$project$Tags$Timed = F2(
	function (a, b) {
		return {$: 'Timed', a: a, b: b};
	});
var $author$project$Tags$TraumaDamage = {$: 'TraumaDamage'};
var $author$project$Tags$TraumaResistance = {$: 'TraumaResistance'};
var $author$project$Tags$Triggered = F2(
	function (a, b) {
		return {$: 'Triggered', a: a, b: b};
	});
var $author$project$Tags$Twin = F2(
	function (a, b) {
		return {$: 'Twin', a: a, b: b};
	});
var $author$project$Tags$WeakspotDamage = {$: 'WeakspotDamage'};
var $author$project$Tags$While = F2(
	function (a, b) {
		return {$: 'While', a: a, b: b};
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$CardData$rawCards = _List_fromArray(
	[
		{
		affinity: 'Discipline',
		cost: 30,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$BulletDamage,
				$author$project$Tags$RelativeMax(5)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$BulletStumble,
				$author$project$Tags$AbsoluteMax(1)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$MeleeStumble,
				$author$project$Tags$AbsoluteMax(5))
			]),
		filename: '7_0_3.jpg',
		id: 1,
		kind: 'Offense',
		name: 'Combat Training',
		properties: _List_fromArray(
			['+5% Bullet Damage', '+1 Bullet Stumble', '+5 Melee Stumble']),
		supplyLine: {index: 1, name: 'Paul\'s Alley', tier: 1, track: 'Alley'},
		totalCost: 30
	},
		{
		affinity: 'Discipline',
		cost: 45,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AmmoCapacity,
				$author$project$Tags$RelativeMax(50)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$StaminaEfficiency,
				$author$project$Tags$RelativeMax(-20))
			]),
		filename: '6_1_0.jpg',
		id: 2,
		kind: 'Offense',
		name: 'Ammo Belt',
		properties: _List_fromArray(
			['+50% Ammo Capacity', '-20% Stamina Efficiency']),
		supplyLine: {index: 2, name: 'Paul\'s Alley', tier: 1, track: 'Alley'},
		totalCost: 75
	},
		{
		affinity: 'Reflex',
		cost: 30,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AimSpeed,
				$author$project$Tags$RelativeMax(30))
			]),
		filename: '2_0_2.jpg',
		id: 3,
		kind: 'Offense',
		name: 'HI Vis Sights',
		properties: _List_fromArray(
			['+30% Aim Speed']),
		supplyLine: {index: 3, name: 'Paul\'s Alley', tier: 1, track: 'Alley'},
		totalCost: 105
	},
		{
		affinity: 'Discipline',
		cost: 30,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Accuracy,
				$author$project$Tags$RelativeMax(30))
			]),
		filename: '6_1_2.jpg',
		id: 4,
		kind: 'Offense',
		name: 'Front Sight Focus',
		properties: _List_fromArray(
			['+20% Accuracy']),
		supplyLine: {index: 4, name: 'Paul\'s Alley', tier: 1, track: 'Alley'},
		totalCost: 140
	},
		{
		affinity: 'Fortune',
		cost: 30,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$OffensiveAccessoryCount,
				$author$project$Tags$AbsoluteMax(1))
			]),
		filename: '14_0_4.jpg',
		id: 5,
		kind: 'Offense',
		name: 'Grenade Pouch',
		properties: _List_fromArray(
			['+1 Offensive Inventory']),
		supplyLine: {index: 5, name: 'Paul\'s Alley', tier: 1, track: 'Alley'},
		totalCost: 170
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				$author$project$Tags$Team(
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$AmmoCapacity,
					$author$project$Tags$RelativeMax(10)))
			]),
		filename: '9_0_4.jpg',
		id: 6,
		kind: 'Offense',
		name: 'Ammo for All',
		properties: _List_fromArray(
			['TEAM EFFECTS +10% Team Ammo Capacity']),
		supplyLine: {index: 6, name: 'Paul\'s Alley', tier: 1, track: 'Alley'},
		totalCost: 270
	},
		{
		affinity: 'Discipline',
		cost: 45,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$BulletDamage,
				$author$project$Tags$RelativeMax(7.5)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$BulletPenetration,
				$author$project$Tags$RelativeMax(200))
			]),
		filename: '7_0_4.jpg',
		id: 7,
		kind: 'Offense',
		name: 'Large Caliber Rounds',
		properties: _List_fromArray(
			['+7.5% Bullet Damage', '+200% Bullet Penetration']),
		supplyLine: {index: 7, name: 'The Stilts', tier: 1, track: 'Alley'},
		totalCost: 320
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$ReloadSpeed,
				$author$project$Tags$RelativeMax(30)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$DamageResistance,
				$author$project$Tags$RelativeMax(-5))
			]),
		filename: '1_0_4.jpg',
		id: 8,
		kind: 'Offense',
		name: 'Widemouth Magwell',
		properties: _List_fromArray(
			['+30% Reload Speed', '-5% Damage Resistance']),
		supplyLine: {index: 8, name: 'The Stilts', tier: 1, track: 'Alley'},
		totalCost: 370
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_fromArray(
			[
				$author$project$Tags$Special('You can sense nearby Offensive Accessories.'),
				$author$project$Tags$Special('More Offensive Accessories spawn.')
			]),
		filename: '13_1_3.jpg',
		id: 9,
		kind: 'Utility',
		name: 'Offensive Scavenger',
		properties: _List_fromArray(
			['You can sense nearby Offensive Accessories.', 'More Offensive Accessories spawn.']),
		supplyLine: {index: 9, name: 'The Stilts', tier: 1, track: 'Alley'},
		totalCost: 475
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AmmoCapacity,
				$author$project$Tags$RelativeMax(75)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$MoveSpeed,
				$author$project$Tags$RelativeMax(-5))
			]),
		filename: '6_1_1.jpg',
		id: 10,
		kind: 'Offense',
		name: 'Ammo Mule',
		properties: _List_fromArray(
			['+75% Ammo Capacity', '-5% Move Speed']),
		supplyLine: {index: 10, name: 'The Stilts', tier: 1, track: 'Alley'},
		totalCost: 550
	},
		{
		affinity: 'Brawn',
		cost: 30,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AccessoryDamage,
				$author$project$Tags$RelativeMax(25))
			]),
		filename: '11_1_3.jpg',
		id: 11,
		kind: 'Offense',
		name: 'Grenade Training',
		properties: _List_fromArray(
			['+25% Accessory Damage']),
		supplyLine: {index: 11, name: 'Fort Hope', tier: 1, track: 'Alley'},
		totalCost: 585
	},
		{
		affinity: 'Discipline',
		cost: 45,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Accuracy,
				$author$project$Tags$RelativeMax(30)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$StaminaEfficiency,
				$author$project$Tags$RelativeMax(-20))
			]),
		filename: '6_1_3.jpg',
		id: 12,
		kind: 'Offense',
		name: 'Optics Enthusiast',
		properties: _List_fromArray(
			['+30% Accuracy', '-20% Stamina Efficiency']),
		supplyLine: {index: 12, name: 'Fort Hope', tier: 1, track: 'Alley'},
		totalCost: 630
	},
		{
		affinity: 'Brawn',
		cost: 30,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$MeleeDamage,
				$author$project$Tags$RelativeMax(40)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Health,
				$author$project$Tags$AbsoluteMax(5))
			]),
		filename: '11_0_2.jpg',
		id: 13,
		kind: 'Offense',
		name: 'Batter Up',
		properties: _List_fromArray(
			['+40% Melee Damage', '+5 Health']),
		supplyLine: {index: 13, name: 'Fort Hope', tier: 1, track: 'Alley'},
		totalCost: 660
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				$author$project$Tags$Team(
				A2(
					$author$project$Tags$Triggered,
					$author$project$Tags$OnIncapacitated($author$project$Tags$SelfOrTeammate),
					$author$project$Tags$Many(
						_List_fromArray(
							[
								A2(
								$author$project$Tags$Timed,
								$author$project$Tags$ForSeconds(10),
								A2(
									$author$project$Tags$Once,
									$author$project$Tags$Damage,
									$author$project$Tags$RelativeMax(30))),
								A2(
								$author$project$Tags$Timed,
								$author$project$Tags$ForSeconds(10),
								A2(
									$author$project$Tags$Once,
									$author$project$Tags$ReloadSpeed,
									$author$project$Tags$RelativeMax(20))),
								A2(
								$author$project$Tags$Timed,
								$author$project$Tags$ForSeconds(10),
								$author$project$Tags$Special('Unlimited ammo'))
							]))))
			]),
		filename: '8_1_0.jpg',
		id: 14,
		kind: 'Offense',
		name: 'Avenge The Fallen',
		properties: _List_fromArray(
			['TEAM EFFECTS When you or a teammate becomes incapacitated, all teammates gain 30% Damage,20% Reload Speed, and Unlimited Ammo for 10 seconds.']),
		supplyLine: {index: 14, name: 'Fort Hope', tier: 1, track: 'Alley'},
		totalCost: 765
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerAimingDownSights,
				$author$project$Tags$Special('Each 0.75 seconds you Aim Down Sights increases your Damage by 10% (up to 3 stacks).'))
			]),
		filename: '10_0_3.jpg',
		id: 15,
		kind: 'Offense',
		name: 'Patient Hunter',
		properties: _List_fromArray(
			['Each 0.75 seconds you Aim Down Sights increase your Damage by 10% (up to 3 stacks).']),
		supplyLine: {index: 15, name: 'Fort Hope', tier: 1, track: 'Alley'},
		totalCost: 840
	},
		{
		affinity: 'Fortune',
		cost: 45,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$OffensiveAccessoryCount,
				$author$project$Tags$AbsoluteMax(2)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Damage,
				$author$project$Tags$RelativeMax(-10))
			]),
		filename: '14_1_0.jpg',
		id: 16,
		kind: 'Offense',
		name: 'Double Grenade Pouch',
		properties: _List_fromArray(
			['+2 Offensive Inventory', '-10% Damage Dealt']),
		supplyLine: {index: 16, name: 'Paul\'s Alley', tier: 2, track: 'Alley'},
		totalCost: 890
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerCrouching,
				$author$project$Tags$Disables($author$project$Tags$TakingFriendlyFire)),
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerCrouching,
				$author$project$Tags$Disables($author$project$Tags$DealingFriendlyFire)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Health,
				$author$project$Tags$AbsoluteMax(10))
			]),
		filename: '9_1_0.jpg',
		id: 17,
		kind: 'Defense',
		name: 'Down in Front!',
		properties: _List_fromArray(
			['While crouching you neither take nor deal Friendly Fire damage.', '+10 Health']),
		supplyLine: {index: 17, name: 'Paul\'s Alley', tier: 2, track: 'Alley'},
		totalCost: 95
	},
		{
		affinity: 'Brawn',
		cost: 45,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AccessoryDamage,
				$author$project$Tags$RelativeMax(50)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AmmoCapacity,
				$author$project$Tags$RelativeMax(-15))
			]),
		filename: '11_1_4.jpg',
		id: 18,
		kind: 'Offense',
		name: 'Demolitions Expert',
		properties: _List_fromArray(
			['+50% Accessory Damage', '-15% Ammo Capacity']),
		supplyLine: {index: 18, name: 'Paul\'s Alley', tier: 2, track: 'Alley'},
		totalCost: 1040
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$ReloadSpeed,
				$author$project$Tags$RelativeMax(50)),
				$author$project$Tags$Disables($author$project$Tags$AimingDownSights)
			]),
		filename: '1_1_0.jpg',
		id: 19,
		kind: 'Offense',
		name: 'Mag Coupler',
		properties: _List_fromArray(
			['+50% Reload Speed', 'DISABLES: Aim Down Sights']),
		supplyLine: {index: 19, name: 'Paul\'s Alley', tier: 2, track: 'Alley'},
		totalCost: 1110
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_fromArray(
			[
				$author$project$Tags$Special('You can equip a Primary weapon in your Secondary slot.'),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$SwapSpeed,
				$author$project$Tags$RelativeMax(25))
			]),
		filename: '13_1_2.jpg',
		id: 20,
		kind: 'Offense',
		name: 'Two is One and One is None',
		properties: _List_fromArray(
			['You can equip a Primary weapon in your Secondary slot.', '-25% Swap Speed']),
		supplyLine: {index: 20, name: 'Paul\'s Alley', tier: 2, track: 'Alley'},
		totalCost: 1215
	},
		{
		affinity: 'Brawn',
		cost: 45,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$MeleeDamage,
				$author$project$Tags$RelativeMax(20)),
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerUsingMeleeWeapon,
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$DamageResistance,
					$author$project$Tags$RelativeMax(10))),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AmmoCapacity,
				$author$project$Tags$RelativeMax(-15))
			]),
		filename: '11_0_3.jpg',
		id: 21,
		kind: 'Offense',
		name: 'Spiky Bits',
		properties: _List_fromArray(
			['+20% Melee Damage', '+10% Damage Resistance while using a Melee weapon', '-15% Ammo Capacity']),
		supplyLine: {index: 21, name: 'The Stilts', tier: 2, track: 'Alley'},
		totalCost: 1265
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$BulletDamage,
				$author$project$Tags$RelativeMax(10)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$EffectiveRange,
				$author$project$Tags$RelativeMax(150))
			]),
		filename: '7_1_0.jpg',
		id: 22,
		kind: 'Offense',
		name: 'Silver Bullets',
		properties: _List_fromArray(
			['+10% Bullet Damage', '+15% Effective Range']),
		supplyLine: {index: 22, name: 'The Stilts', tier: 2, track: 'Alley'},
		totalCost: 1335
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AimSpeed,
				$author$project$Tags$RelativeMax(80)),
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerAimingDownSights,
				$author$project$Tags$Special('Every 0.75 seconds gives 10% Recoil Control (up to 3 stacks)')),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AimingDownSightsMoveSpeed,
				$author$project$Tags$RelativeMax(-50))
			]),
		filename: '2_0_4.jpg',
		id: 23,
		kind: 'Offense',
		name: 'Steady Aim',
		properties: _List_fromArray(
			['+80% Aim Speed', 'Every 0.75 seconds you Aim Down Sights gives 10% Recoil Control (up to 3 stacks)', '-50% ADS Move Speed']),
		supplyLine: {index: 23, name: 'The Stilts', tier: 2, track: 'Alley'},
		totalCost: 1410
	},
		{
		affinity: 'Fortune',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Triggered,
				$author$project$Tags$OnWeaponChanged,
				$author$project$Tags$Special('Weapon reloads')),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AmmoCapacity,
				$author$project$Tags$RelativeMax(-15))
			]),
		filename: '15_0_2.jpg',
		id: 24,
		kind: 'Offense',
		name: 'Admin Reload',
		properties: _List_fromArray(
			['When you stow your weapon, it reloads.', '-15% Ammo Capacity']),
		supplyLine: {index: 24, name: 'The Stilts', tier: 2, track: 'Alley'},
		totalCost: 1515
	},
		{
		affinity: 'Fortune',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Triggered,
				$author$project$Tags$OnLootCopper,
				$author$project$Tags$Special('You gain 3 additional Copper, stacking up to 75 additional Сopper'))
			]),
		filename: '15_1_4.jpg',
		id: 25,
		kind: 'Utility',
		name: 'Money Grubbers',
		properties: _List_fromArray(
			['Each time your team loots Copper, you gain 3 additional Copper, stacking up to 75 additional Сopper.']),
		supplyLine: {index: 25, name: 'The Stilts', tier: 2, track: 'Alley'},
		totalCost: 1585
	},
		{
		affinity: 'Fortune',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Health,
				$author$project$Tags$RelativeMax(-10)),
				$author$project$Tags$Team(
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$OffensiveAccessoryCount,
					$author$project$Tags$AbsoluteMax(1)))
			]),
		filename: '14_1_1.jpg',
		id: 26,
		kind: 'Offense',
		name: 'Surplus Pouches',
		properties: _List_fromArray(
			['-10% Health', 'TEAM EFFECTS +1 Team Offensive Inventory']),
		supplyLine: {index: 26, name: 'Fort Hope', tier: 2, track: 'Alley'},
		totalCost: 1660
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_fromArray(
			[
				$author$project$Tags$Special('You can sense nearby weapons.'),
				$author$project$Tags$Special('More weapons spawn.')
			]),
		filename: '10_0_1.jpg',
		id: 27,
		kind: 'Utility',
		name: 'Weapon Scavenger',
		properties: _List_fromArray(
			['You can sense nearby weapons.', 'More weapons spawn.']),
		supplyLine: {index: 27, name: 'Fort Hope', tier: 2, track: 'Alley'},
		totalCost: 1740
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Triggered,
				$author$project$Tags$OnMeleeKill,
				A2(
					$author$project$Tags$Once,
					$author$project$Tags$TemporaryHealth,
					$author$project$Tags$AbsoluteCurrent(1)))
			]),
		filename: '8_1_1.jpg',
		id: 28,
		kind: 'Defense',
		name: 'Vanguard',
		properties: _List_fromArray(
			['Melee kills grant 1 Temporary Health to you and nearby teammates.']),
		supplyLine: {index: 28, name: 'Fort Hope', tier: 2, track: 'Alley'},
		totalCost: 1840
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Accuracy,
				$author$project$Tags$RelativeMax(50)),
				$author$project$Tags$Disables($author$project$Tags$AimingDownSights)
			]),
		filename: '6_1_4.jpg',
		id: 29,
		kind: 'Offense',
		name: 'Quick Kill',
		properties: _List_fromArray(
			['+50% Accuracy', 'DISABLES: Aim Down Sights']),
		supplyLine: {index: 29, name: 'Fort Hope', tier: 2, track: 'Alley'},
		totalCost: 1915
	},
		{
		affinity: 'Brawn',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Triggered,
				$author$project$Tags$OnTakingPainMeds,
				A2(
					$author$project$Tags$Timed,
					$author$project$Tags$ForSeconds(60),
					A2(
						$author$project$Tags$Passive,
						$author$project$Tags$Damage,
						$author$project$Tags$RelativeMax(25))))
			]),
		filename: '13_1_4.jpg',
		id: 30,
		kind: 'Offense',
		name: 'Chemical courage',
		properties: _List_fromArray(
			['Pain Meds you apply also grant +25% Damage for 60 seconds.']),
		supplyLine: {index: 30, name: 'Paul\'s Alley', tier: 3, track: 'Alley'},
		totalCost: 1990
	},
		{
		affinity: 'Discipline',
		cost: 150,
		effects: _List_fromArray(
			[
				$author$project$Tags$Special('Reloading a gun within 1 seconds of reaching low ammo will increase its magazine size by -30% until the next reload.')
			]),
		filename: '10_0_4.jpg',
		id: 31,
		kind: 'Offense',
		name: 'Power reload',
		properties: _List_fromArray(
			['Reloading a gun within 1 second of reaching low ammo will increase its magazine size by -30% until the next reload.']),
		supplyLine: {index: 31, name: 'Paul\'s Alley', tier: 3, track: 'Alley'},
		totalCost: 2145
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerCrouching,
				A2(
					$author$project$Tags$Twin,
					A2(
						$author$project$Tags$Passive,
						$author$project$Tags$DamageResistance,
						$author$project$Tags$RelativeMax(10)),
					A2(
						$author$project$Tags$Passive,
						$author$project$Tags$Accuracy,
						$author$project$Tags$RelativeMax(40))))
			]),
		filename: '8_0_4.jpg',
		id: 32,
		kind: 'Defense',
		name: 'Hunker down',
		properties: _List_fromArray(
			['While crouching, gain 10% Damage Resistance and 40% Асcuracy.']),
		supplyLine: {index: 32, name: 'Paul\'s Alley', tier: 3, track: 'Alley'},
		totalCost: 2250
	},
		{
		affinity: 'Reflex',
		cost: 150,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Damage,
				$author$project$Tags$RelativeMax(25)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Health,
				$author$project$Tags$RelativeMax(-30))
			]),
		filename: '4_1_3.jpg',
		id: 33,
		kind: 'Offense',
		name: 'Glass Cannon',
		properties: _List_fromArray(
			['+25% Damage', '-30% Health']),
		supplyLine: {index: 33, name: 'Paul\'s Alley', tier: 3, track: 'Alley'},
		totalCost: 2400
	},
		{
		affinity: 'Discipline',
		cost: 150,
		effects: _List_fromArray(
			[
				$author$project$Tags$Special('Mutations you ping are highlighted and your team deals 10% increased damage to highlighted enemies.')
			]),
		filename: '10_1_0.jpg',
		id: 34,
		kind: 'Utility',
		name: 'Marked for Death',
		properties: _List_fromArray(
			['Mutations you ping are highlighted and your team deals 10% increased damage to highlighted enemies.']),
		supplyLine: {index: 34, name: 'Paul\'s Alley', tier: 3, track: 'Alley'},
		totalCost: 2550
	},
		{
		affinity: 'Fortune',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerUsingPistol,
				A2(
					$author$project$Tags$RelativeChance,
					3,
					$author$project$Tags$Special('spawn ammo')))
			]),
		filename: '15_0_1.jpg',
		id: 35,
		kind: 'Utility',
		name: 'Highwayman',
		properties: _List_fromArray(
			['Pistol kills have a 3% chance to spawn ammo or a molotov or a molotov.']),
		supplyLine: {index: 35, name: 'The Stilts', tier: 3, track: 'Alley'},
		totalCost: 2655
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$MeleeDamageAgainstMutation,
				$author$project$Tags$RelativeMax(20)),
				A2(
				$author$project$Tags$Triggered,
				$author$project$Tags$OnDealingMeleeDamageTo($author$project$Tags$Mutation),
				A2(
					$author$project$Tags$Twin,
					A2(
						$author$project$Tags$Once,
						$author$project$Tags$Health,
						$author$project$Tags$AbsoluteCurrent(1)),
					A2(
						$author$project$Tags$Once,
						$author$project$Tags$Stamina,
						$author$project$Tags$AbsoluteCurrent(3))))
			]),
		filename: '12_0_3.jpg',
		id: 36,
		kind: 'Defense',
		name: 'Ignore the Pain',
		properties: _List_fromArray(
			['+20% Melee Damage against Mutations', 'When you deal Melee damage to a Mutation heal 1 Health and recover 3 Stamina.']),
		supplyLine: {index: 36, name: 'The Stilts', tier: 3, track: 'Alley'},
		totalCost: 2760
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$ExplosiveDamage,
				$author$project$Tags$RelativeMax(100)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$ExplosiveResistance,
				$author$project$Tags$RelativeMax(35))
			]),
		filename: '12_1_2.jpg',
		id: 37,
		kind: 'Offense',
		name: 'Bomb Squad',
		properties: _List_fromArray(
			['+100% Explosive Damage', '+35% Explosive Resistance']),
		supplyLine: {index: 37, name: 'The Stilts', tier: 3, track: 'Alley'},
		totalCost: 2865
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Triggered,
				$author$project$Tags$OnKill($author$project$Tags$Ridden),
				A2(
					$author$project$Tags$InDistance,
					2,
					A2(
						$author$project$Tags$Once,
						$author$project$Tags$TemporaryHealth,
						$author$project$Tags$AbsoluteCurrent(2))))
			]),
		filename: '13_0_1.jpg',
		id: 38,
		kind: 'Defense',
		name: 'Face your Fears',
		properties: _List_fromArray(
			['Gain 2 Temporary Health whenever you kill a Ridden within 2 meters.']),
		supplyLine: {index: 38, name: 'The Stilts', tier: 3, track: 'Alley'},
		totalCost: 2965
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Health,
				$author$project$Tags$RelativeMax(-10)),
				$author$project$Tags$Team(
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$Lifes,
					$author$project$Tags$AbsoluteMax(1)))
			]),
		filename: '8_1_4.jpg',
		id: 39,
		kind: 'Defense',
		name: 'Needs of the Many',
		properties: _List_fromArray(
			['-10% Health', 'TEAM EFFECTS +1 Team Extra Life']),
		supplyLine: {index: 39, name: 'The Stilts', tier: 3, track: 'Alley'},
		totalCost: 3065
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerUsingRifle,
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$Accuracy,
					$author$project$Tags$RelativeMax(25))),
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerUsingSniper,
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$Accuracy,
					$author$project$Tags$RelativeMax(25)))
			]),
		filename: '8_1_3.jpg',
		id: 40,
		kind: 'Offense',
		name: 'Trigger Control',
		properties: _List_fromArray(
			['+25% Accuracy with Assault Rifles', '+25% Accuracy with Sniper Rifles']),
		supplyLine: {index: 40, name: 'Fort Hope', tier: 3, track: 'Alley'},
		totalCost: 3170
	},
		{
		affinity: 'Brawn',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AccessoryDamage,
				$author$project$Tags$RelativeMax(75)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$SwapSpeed,
				$author$project$Tags$RelativeMax(-25))
			]),
		filename: '12_0_0.jpg',
		id: 41,
		kind: 'Offense',
		name: 'Improvised Explosives',
		properties: _List_fromArray(
			['+75% Accessory Damage', '-25% Swap Speed']),
		supplyLine: {index: 41, name: 'Fort Hope', tier: 3, track: 'Alley'},
		totalCost: 3250
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$WeakspotDamage,
				$author$project$Tags$RelativeMax(30)),
				$author$project$Tags$Disables($author$project$Tags$AimingDownSights)
			]),
		filename: '5_1_4.jpg',
		id: 42,
		kind: 'Offense',
		name: 'Killer\'s Instinct',
		properties: _List_fromArray(
			['+30% Weakspot Damage', 'DISABLES: Aim Down Sights']),
		supplyLine: {index: 42, name: 'Fort Hope', tier: 3, track: 'Alley'},
		totalCost: 3325
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Triggered,
				$author$project$Tags$OnPrecisionKill,
				$author$project$Tags$Special('5% Reload Speed for 5 seconds (stacking up to 10 times'))
			]),
		filename: '8_1_2.jpg',
		id: 43,
		kind: 'Offense',
		name: 'In the Zone',
		properties: _List_fromArray(
			['Precision Kills grant 5% Reload Speed for 5 seconds (stacking up to 10 times).']),
		supplyLine: {index: 43, name: 'Paul\'s Alley', tier: 4, track: 'Alley'},
		totalCost: 3435
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerAimingDownSights,
				A2(
					$author$project$Tags$While,
					$author$project$Tags$PlayerUsingSniper,
					A2(
						$author$project$Tags$Passive,
						$author$project$Tags$MoveSpeed,
						$author$project$Tags$RelativeMax(40))))
			]),
		filename: '9_0_3.jpg',
		id: 44,
		kind: 'Mobility',
		name: 'Controlled Movement',
		properties: _List_fromArray(
			['+40% Move Speed while aiming down sights with Sniper Rifles.']),
		supplyLine: {index: 44, name: 'Paul\'s Alley', tier: 4, track: 'Alley'},
		totalCost: 3540
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerUsingShotgun,
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$ReloadSpeed,
					$author$project$Tags$RelativeMax(40)))
			]),
		filename: '9_0_2.jpg',
		id: 45,
		kind: 'Offense',
		name: 'Scattergun Skills',
		properties: _List_fromArray(
			['+40% Reload Speed with Shotguns.']),
		supplyLine: {index: 45, name: 'Paul\'s Alley', tier: 4, track: 'Alley'},
		totalCost: 3640
	},
		{
		affinity: 'Fortune',
		cost: 100,
		effects: _List_Nil,
		filename: '16_0_2.jpg',
		id: 46,
		kind: 'Utility',
		name: 'Share the Wealth',
		properties: _List_fromArray(
			['Each teammate gains 100 bonus Copper at the start of each level.']),
		supplyLine: {index: 46, name: 'The Stilts', tier: 4, track: 'Alley'},
		totalCost: 3785
	},
		{
		affinity: 'Discipline',
		cost: 30,
		effects: _List_Nil,
		filename: '7_0_0.jpg',
		id: 47,
		kind: 'Defense',
		name: 'Motorcycle Jacket',
		properties: _List_fromArray(
			['+5% Damage Resistance', '+5 Health']),
		supplyLine: {index: 1, name: 'The Clinic', tier: 1, track: 'Clinic'},
		totalCost: 30
	},
		{
		affinity: 'Brawn',
		cost: 30,
		effects: _List_Nil,
		filename: '11_1_0.jpg',
		id: 48,
		kind: 'Defense',
		name: 'Durable',
		properties: _List_fromArray(
			['+15% Trauma Resistance', '+5 Health']),
		supplyLine: {index: 2, name: 'The Clinic', tier: 1, track: 'Clinic'},
		totalCost: 60
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_Nil,
		filename: '9_1_1.jpg',
		id: 49,
		kind: 'Defense',
		name: 'Poultice',
		properties: _List_fromArray(
			['When you use a Medical Accessory, the target heals for an additional 20 Health over 30 seconds.']),
		supplyLine: {index: 3, name: 'The Clinic', tier: 1, track: 'Clinic'},
		totalCost: 130
	},
		{
		affinity: 'Discipline',
		cost: 45,
		effects: _List_Nil,
		filename: '7_1_2.jpg',
		id: 50,
		kind: 'Defense',
		name: 'EMT Bag',
		properties: _List_fromArray(
			['+40% Healing Efficiency', '-20% Stamina Efficiency']),
		supplyLine: {index: 4, name: 'The Clinic', tier: 1, track: 'Clinic'},
		totalCost: 185
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_Nil,
		filename: '8_0_2.jpg',
		id: 51,
		kind: 'Defense',
		name: 'Inspiring Sacrifice',
		properties: _List_fromArray(
			['TEAM EFFECTS When you or a teammate becomes incapacitated, all teammates heal for 20 health over 15 seconds.']),
		supplyLine: {index: 5, name: 'The Clinic', tier: 1, track: 'Clinic'},
		totalCost: 285
	},
		{
		affinity: 'Discipline',
		cost: 45,
		effects: _List_Nil,
		filename: '7_0_1.jpg',
		id: 52,
		kind: 'Defense',
		name: 'Padded Suit',
		properties: _List_fromArray(
			['+10% Damage Resistance', '+5 Health', '-20% Stamina Efficiency']),
		supplyLine: {index: 6, name: 'The Furnace', tier: 1, track: 'Clinic'},
		totalCost: 335
	},
		{
		affinity: 'Brawn',
		cost: 45,
		effects: _List_Nil,
		filename: '11_0_0.jpg',
		id: 53,
		kind: 'Defense',
		name: 'Hydration Pack',
		properties: _List_fromArray(
			['+25 Health', '-15% Ammo Capacity']),
		supplyLine: {index: 7, name: 'The Furnace', tier: 1, track: 'Clinic'},
		totalCost: 385
	},
		{
		affinity: 'Brawn',
		cost: 75,
		effects: _List_Nil,
		filename: '14_0_2.jpg',
		id: 54,
		kind: 'Defense',
		name: 'Buckshot Bruiser',
		properties: _List_fromArray(
			['When using Shotguns, gain 0.25 Temporary Health for each pellet that hits.']),
		supplyLine: {index: 12, name: 'The Furnace', tier: 1, track: 'Clinic'},
		totalCost: 460
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_Nil,
		filename: '10_0_0.jpg',
		id: 55,
		kind: 'Utility',
		name: 'Support Scavenger',
		properties: _List_fromArray(
			['You can sense nearby Support Accessories.', 'More Support Accessories spawn.']),
		supplyLine: {index: 13, name: 'The Furnace', tier: 1, track: 'Clinic'},
		totalCost: 560
	},
		{
		affinity: 'Fortune',
		cost: 30,
		effects: _List_Nil,
		filename: '14_1_2.jpg',
		id: 56,
		kind: 'Defense',
		name: 'Fanny Pack',
		properties: _List_fromArray(
			['+1 Support Inventory']),
		supplyLine: {index: 14, name: 'The Furnace', tier: 1, track: 'Clinic'},
		totalCost: 595
	},
		{
		affinity: 'Reflex',
		cost: 30,
		effects: _List_Nil,
		filename: '1_1_1.jpg',
		id: 57,
		kind: 'Offense',
		name: 'Slugger',
		properties: _List_fromArray(
			['+5 Health', '+10% Melee Stamina Efficiency', '+20% Melee Attack Speed']),
		supplyLine: {index: 15, name: 'Grant\'s Brew House', tier: 1, track: 'Clinic'},
		totalCost: 630
	},
		{
		affinity: 'Reflex',
		cost: 30,
		effects: _List_Nil,
		filename: '2_1_3.jpg',
		id: 58,
		kind: 'Utility',
		name: 'Smelling Salts',
		properties: _List_fromArray(
			['+100% Revive Speed']),
		supplyLine: {index: 16, name: 'Grant\'s Brew House', tier: 1, track: 'Clinic'},
		totalCost: 660
	},
		{
		affinity: 'Brawn',
		cost: 45,
		effects: _List_Nil,
		filename: '11_1_1.jpg',
		id: 59,
		kind: 'Defense',
		name: 'Body Armor',
		properties: _List_fromArray(
			['+25% Trauma Resistance', '-15% Ammo Capacity']),
		supplyLine: {index: 17, name: 'Grant\'s Brew House', tier: 1, track: 'Clinic'},
		totalCost: 705
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_Nil,
		filename: '12_1_3.jpg',
		id: 60,
		kind: 'Defense',
		name: 'Scar Tissue',
		properties: _List_fromArray(
			['Take 1 less damage from all Ridden.']),
		supplyLine: {index: 18, name: 'Grant\'s Brew House', tier: 1, track: 'Clinic'},
		totalCost: 810
	},
		{
		affinity: 'Brawn',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Once,
				$author$project$Tags$TraumaDamage,
				$author$project$Tags$AbsoluteCurrent(-15))
			]),
		filename: '13_1_1.jpg',
		id: 61,
		kind: 'Defense',
		name: 'Fresh Bandage',
		properties: _List_fromArray(
			['Heal 15 Trauma Damage at the start of each level.']),
		supplyLine: {index: 19, name: 'Grant\'s Brew House', tier: 1, track: 'Clinic'},
		totalCost: 980
	},
		{
		affinity: 'Fortune',
		cost: 45,
		effects: _List_Nil,
		filename: '14_1_3.jpg',
		id: 62,
		kind: 'Defense',
		name: 'Shoulder Bag',
		properties: _List_fromArray(
			['+2 Support Inventory', '-10% Damage Dealt']),
		supplyLine: {index: 20, name: 'The Clinic', tier: 2, track: 'Clinic'},
		totalCost: 1030
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_fromArray(
			[
				$author$project$Tags$Special('While reviving teammates, take 3 less damage from all Ridden.'),
				$author$project$Tags$Special('Heals teammates for an additional 10 Health when you revive them.')
			]),
		filename: '2_1_4.jpg',
		id: 63,
		kind: 'Utility',
		name: 'Pep Talk',
		properties: _List_fromArray(
			['While reviving teammates, take 3 less damage from all Ridden.', 'Heals teammates for an additional 10 Health when you revive them.']),
		supplyLine: {index: 21, name: 'The Clinic', tier: 2, track: 'Clinic'},
		totalCost: 1075
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_fromArray(
			[
				$author$project$Tags$Team(
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$Health,
					$author$project$Tags$AbsoluteMax(10)))
			]),
		filename: '13_0_2.jpg',
		id: 64,
		kind: 'Defense',
		name: 'Well Fed',
		properties: _List_fromArray(
			['TEAM EFFECTS +10 Team Health']),
		supplyLine: {index: 22, name: 'The Clinic', tier: 2, track: 'Clinic'},
		totalCost: 1185
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_Nil,
		filename: '8_0_3.jpg',
		id: 65,
		kind: 'Defense',
		name: 'Charitable Soul',
		properties: _List_fromArray(
			['Healing a teammate also applies 50% of the effect to you.']),
		supplyLine: {index: 23, name: 'The Clinic', tier: 2, track: 'Clinic'},
		totalCost: 1290
	},
		{
		affinity: 'Discipline',
		cost: 45,
		effects: _List_Nil,
		filename: '10_0_2.jpg',
		id: 66,
		kind: 'Defense',
		name: 'Amped Up',
		properties: _List_fromArray(
			['When you exit a starting saferoom, your team gains 50 Temporary Health.']),
		supplyLine: {index: 24, name: 'The Furnace', tier: 2, track: 'Clinic'},
		totalCost: 1345
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_Nil,
		filename: '7_0_2.jpg',
		id: 67,
		kind: 'Defense',
		name: 'Motorcycle Helmet',
		properties: _List_fromArray(
			['+15% Damage Resistance', '+10 Health', 'DISABLES: Aim Down Sights']),
		supplyLine: {index: 25, name: 'The Furnace', tier: 2, track: 'Clinic'},
		totalCost: 1415
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_Nil,
		filename: '14_0_1.jpg',
		id: 68,
		kind: 'Offense',
		name: 'Broadside',
		properties: _List_fromArray(
			['Precision Kills have a 20% chance to cause Ridden to explode, dealing 15 damage to other Ridden within 4 meters.']),
		supplyLine: {index: 26, name: 'The Furnace', tier: 2, track: 'Clinic'},
		totalCost: 1515
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '3_1_3.jpg',
		id: 69,
		kind: 'Defense',
		name: 'Combat Medic',
		properties: _List_fromArray(
			['+50% Use Speed', 'Heals teammates for an additional 20 Health when you revive them.']),
		supplyLine: {index: 27, name: 'The Furnace', tier: 2, track: 'Clinic'},
		totalCost: 1620
	},
		{
		affinity: 'Fortune',
		cost: 70,
		effects: _List_Nil,
		filename: '14_1_4.jpg',
		id: 70,
		kind: 'Defense',
		name: 'Box O` Bags',
		properties: _List_fromArray(
			['-10% Health', 'TEAM EFFECTS +1 Team Support Inventory']),
		supplyLine: {index: 28, name: 'Grant\'s Brew House', tier: 2, track: 'Clinic'},
		totalCost: 1700
	},
		{
		affinity: 'Brawn',
		cost: 70,
		effects: _List_Nil,
		filename: '11_0_1.jpg',
		id: 71,
		kind: 'Defense',
		name: 'Canned Goods',
		properties: _List_fromArray(
			['+40 Health', '-30% Stamina']),
		supplyLine: {index: 29, name: 'Grant\'s Brew House', tier: 2, track: 'Clinic'},
		totalCost: 1780
	},
		{
		affinity: 'Brawn',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$TraumaResistance,
				$author$project$Tags$RelativeMax(40)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$FireResistance,
				$author$project$Tags$RelativeMax(-100)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AcidResistance,
				$author$project$Tags$RelativeMax(-100))
			]),
		filename: '11_1_2.jpg',
		id: 72,
		kind: 'Defense',
		name: 'Wooden Armor',
		properties: _List_fromArray(
			['+40% Trauma Resistance', '-100% Fire Resistance', '-100% Acid Resistance']),
		supplyLine: {index: 30, name: 'Grant\'s Brew House', tier: 2, track: 'Clinic'},
		totalCost: 1855
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_fromArray(
			[
				$author$project$Tags$Team(
				A2(
					$author$project$Tags$While,
					$author$project$Tags$PlayerUsingMedicalAccessory,
					A2(
						$author$project$Tags$Passive,
						$author$project$Tags$Health,
						$author$project$Tags$AbsoluteCurrent(8))))
			]),
		filename: '9_1_2.jpg',
		id: 73,
		kind: 'Defense',
		name: 'Group Therapy',
		properties: _List_fromArray(
			['When you use a Medical Accessory, all teammates heal for 8 Health.']),
		supplyLine: {index: 31, name: 'The Clinic', tier: 3, track: 'Clinic'},
		totalCost: 1930
	},
		{
		affinity: 'Brawn',
		cost: 150,
		effects: _List_Nil,
		filename: '13_0_4.jpg',
		id: 74,
		kind: 'Offense',
		name: 'Sunder',
		properties: _List_fromArray(
			['Melee hits cause the target to take 20% increased damage for 5 seconds.']),
		supplyLine: {index: 32, name: 'The Clinic', tier: 3, track: 'Clinic'},
		totalCost: 2085
	},
		{
		affinity: 'Brawn',
		cost: 45,
		effects: _List_Nil,
		filename: '14_0_0.jpg',
		id: 75,
		kind: 'Defense',
		name: 'Numb',
		properties: _List_fromArray(
			['Gain +15% Damage Resistance while you have Temporary Health.']),
		supplyLine: {index: 33, name: 'The Clinic', tier: 3, track: 'Clinic'},
		totalCost: 2140
	},
		{
		affinity: 'Fortune',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Once,
				$author$project$Tags$Lifes,
				$author$project$Tags$AbsoluteCurrent(1)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$TraumaResistance,
				$author$project$Tags$RelativeMax(15))
			]),
		filename: '15_1_0.jpg',
		id: 76,
		kind: 'Defense',
		name: 'Life Insurance',
		properties: _List_fromArray(
			['+1 Extra Life', '+15% Reduced Incap Trauma']),
		supplyLine: {index: 34, name: 'The Clinic', tier: 3, track: 'Clinic'},
		totalCost: 2240
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_Nil,
		filename: '13_1_0.jpg',
		id: 77,
		kind: 'Defense',
		name: 'Overwatch',
		properties: _List_fromArray(
			['Kills from greater than 15 meters grant 5 Temporary Health to teammates within 10 meters of the target.']),
		supplyLine: {index: 35, name: 'The Furnace', tier: 3, track: 'Clinic'},
		totalCost: 2345
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_Nil,
		filename: '12_1_0.jpg',
		id: 78,
		kind: 'Defense',
		name: 'True Grit',
		properties: _List_fromArray(
			['When you take a single hit for 15 or more damage, heal 10 health over 5 seconds.']),
		supplyLine: {index: 36, name: 'The Furnace', tier: 3, track: 'Clinic'},
		totalCost: 2450
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_Nil,
		filename: '12_1_1.jpg',
		id: 79,
		kind: 'Offense',
		name: 'Pyro',
		properties: _List_fromArray(
			['+100% Fire damage.', 'Kills with fire grant you Temporary Health.', 'You can sense flammable objects nearby.']),
		supplyLine: {index: 37, name: 'The Furnace', tier: 3, track: 'Clinic'},
		totalCost: 2555
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_Nil,
		filename: '12_0_2.jpg',
		id: 80,
		kind: 'Offense',
		name: 'Heavy Hitter',
		properties: _List_fromArray(
			['Melee hits against Weakspots deal +20 additional Stumble Damage.']),
		supplyLine: {index: 38, name: 'The Furnace', tier: 3, track: 'Clinic'},
		totalCost: 2655
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_Nil,
		filename: '13_0_0.jpg',
		id: 81,
		kind: 'Offense',
		name: 'Line \'em Up',
		properties: _List_fromArray(
			['+10% Effective Bullet Range', '+15% Recoil Control', '+25% Bullet Penetration', '+25% Aim Speed']),
		supplyLine: {index: 39, name: 'Grant\'s Brew House', tier: 3, track: 'Clinic'},
		totalCost: 2765
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_Nil,
		filename: '3_0_0.jpg',
		id: 82,
		kind: 'Utility',
		name: 'Rousing Speech',
		properties: _List_fromArray(
			['+225% Revive Speed', 'DISABLES: Offensive Accessories', 'TEAM EFFECTS +20% Reduced Incap Trauma']),
		supplyLine: {index: 40, name: 'Grant\'s Brew House', tier: 3, track: 'Clinic'},
		totalCost: 2850
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '4_0_0.jpg',
		id: 83,
		kind: 'Defense',
		name: 'Medical Expert',
		properties: _List_fromArray(
			['+15% Healing Efficiency', 'When you use a Medical Accessory, you gain 15% Move Speed for 15 seconds.']),
		supplyLine: {index: 41, name: 'The Clinic', tier: 4, track: 'Clinic'},
		totalCost: 2960
	},
		{
		affinity: 'Discipline',
		cost: 75,
		effects: _List_fromArray(
			[
				$author$project$Tags$Special('When you use a Medical Accessory, the target gains +10% Maximum Health, Stamina, and Stamina Regen until the end of the level.')
			]),
		filename: '10_1_3.jpg',
		id: 84,
		kind: 'Defense',
		name: 'Experienced EMT',
		properties: _List_fromArray(
			['When you use a Medical Accessory, the target gains +10% Maximum Health, Stamina, and Stamina Regen until the end of the level.']),
		supplyLine: {index: 42, name: 'The Clinic', tier: 4, track: 'Clinic'},
		totalCost: 3040
	},
		{
		affinity: 'Fortune',
		cost: 75,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Once,
				$author$project$Tags$Health,
				$author$project$Tags$AbsoluteCurrent(15)),
				A2(
				$author$project$Tags$Once,
				$author$project$Tags$TraumaDamage,
				$author$project$Tags$AbsoluteCurrent(7)),
				A2(
				$author$project$Tags$Once,
				$author$project$Tags$AmmoRefill,
				$author$project$Tags$RelativeMax(10))
			]),
		filename: '16_1_0.jpg',
		id: 85,
		kind: 'Defense',
		name: 'Saferoom Recovery',
		properties: _List_fromArray(
			['Your team heals 15 Health, 7 Trauma Damage and refills 10% Ammo at the start of each level.']),
		supplyLine: {index: 43, name: 'The Clinic', tier: 4, track: 'Clinic'},
		totalCost: 3115
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_Nil,
		filename: '9_1_3.jpg',
		id: 86,
		kind: 'Defense',
		name: 'Medical Professional',
		properties: _List_fromArray(
			['First Aids and Defibrillators also recover 15 Trauma Damage and 1 Extra Life.']),
		supplyLine: {index: 44, name: 'The Clinic', tier: 4, track: 'Clinic'},
		totalCost: 3215
	},
		{
		affinity: 'Reflex',
		cost: 150,
		effects: _List_Nil,
		filename: '5_0_2.jpg',
		id: 87,
		kind: 'Defense',
		name: 'Miraculous Recovery',
		properties: _List_fromArray(
			['When you use a Medical Accessory, it has a 25% chance to have 100% increased effect.']),
		supplyLine: {index: 45, name: 'The Clinic', tier: 4, track: 'Clinic'},
		totalCost: 3370
	},
		{
		affinity: 'Reflex',
		cost: 10,
		effects: _List_Nil,
		filename: '1_0_0.jpg',
		id: 88,
		kind: 'Mobility',
		name: 'Cross Trainers',
		properties: _List_fromArray(
			['+20% Stamina', '+20% Stamina Regen', '+3% Move Speed', '+5 Health']),
		supplyLine: {index: 1, name: 'The Crow\'s Nest', tier: 1, track: 'Nest'},
		totalCost: 10
	},
		{
		affinity: 'Reflex',
		cost: 30,
		effects: _List_Nil,
		filename: '1_1_4.jpg',
		id: 89,
		kind: 'Offense',
		name: 'Ridden Slayer',
		properties: _List_fromArray(
			['+20% Weakspot Damage']),
		supplyLine: {index: 2, name: 'The Crow\'s Nest', tier: 1, track: 'Nest'},
		totalCost: 40
	},
		{
		affinity: 'Reflex',
		cost: 30,
		effects: _List_Nil,
		filename: '2_1_0.jpg',
		id: 90,
		kind: 'Utility',
		name: 'Shooting Gloves',
		properties: _List_fromArray(
			['+25% Weapon Swap Speed']),
		supplyLine: {index: 3, name: 'The Crow\'s Nest', tier: 1, track: 'Nest'},
		totalCost: 75
	},
		{
		affinity: 'Reflex',
		cost: 30,
		effects: _List_Nil,
		filename: '3_0_4.jpg',
		id: 91,
		kind: 'Mobility',
		name: 'Superior Cardio',
		properties: _List_fromArray(
			['+20% Stamina', '+20% Sprint Efficiency', '+5 Health']),
		supplyLine: {index: 4, name: 'The Crow\'s Nest', tier: 1, track: 'Nest'},
		totalCost: 110
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_Nil,
		filename: '5_0_0.jpg',
		id: 92,
		kind: 'Mobility',
		name: 'Evasive Action',
		properties: _List_fromArray(
			['When you take a hit for 10 or more damage, gain 15% Move Speed for 3 seconds.']),
		supplyLine: {index: 5, name: 'The Crow\'s Nest', tier: 1, track: 'Nest'},
		totalCost: 180
	},
		{
		affinity: 'Fortune',
		cost: 150,
		effects: _List_Nil,
		filename: '16_0_0.jpg',
		id: 93,
		kind: 'Mobility',
		name: 'Run and Gun',
		properties: _List_fromArray(
			['You can shoot while sprinting.']),
		supplyLine: {index: 6, name: 'The Crow\'s Nest', tier: 1, track: 'Nest'},
		totalCost: 330
	},
		{
		affinity: 'Reflex',
		cost: 30,
		effects: _List_Nil,
		filename: '5_0_3.jpg',
		id: 94,
		kind: 'Utility',
		name: 'Screwdriver',
		properties: _List_fromArray(
			['+50% Use Speed', '+10% Stamina']),
		supplyLine: {index: 7, name: 'Bridge Town', tier: 1, track: 'Nest'},
		totalCost: 360
	},
		{
		affinity: 'Discipline',
		cost: 30,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$StaminaRegeneration,
				$author$project$Tags$RelativeMax(30)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Health,
				$author$project$Tags$AbsoluteMax(5))
			]),
		filename: '7_1_4.jpg',
		id: 95,
		kind: 'Mobility',
		name: 'Energy Bar',
		properties: _List_fromArray(
			['+30% Stamina Regeneration', '+5 Health']),
		supplyLine: {index: 8, name: 'Bridge Town', tier: 1, track: 'Nest'},
		totalCost: 395
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '5_1_1.jpg',
		id: 96,
		kind: 'Utility',
		name: 'Utility Scavenger',
		properties: _List_fromArray(
			['You can sense nearby Quick Accessories.', 'More Quick Accessories spawn.']),
		supplyLine: {index: 9, name: 'Bridge Town', tier: 1, track: 'Nest'},
		totalCost: 500
	},
		{
		affinity: 'Reflex',
		cost: 30,
		effects: _List_Nil,
		filename: '3_0_1.jpg',
		id: 97,
		kind: 'Mobility',
		name: 'Dash',
		properties: _List_fromArray(
			['+5% Move Speed']),
		supplyLine: {index: 10, name: 'Bridge Town', tier: 1, track: 'Nest'},
		totalCost: 535
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '4_0_1.jpg',
		id: 98,
		kind: 'Mobility',
		name: 'Rolling Thunder',
		properties: _List_fromArray(
			['+35% Move Speed while firing with Shotguns.', '+10% Damage with Shotguns.']),
		supplyLine: {index: 11, name: 'Knuckle House', tier: 1, track: 'Nest'},
		totalCost: 640
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_Nil,
		filename: '2_0_0.jpg',
		id: 99,
		kind: 'Offense',
		name: 'Reckless Strategy',
		properties: _List_fromArray(
			['+30% Weakspot Damage', '-5% Damage Resistance']),
		supplyLine: {index: 12, name: 'Knuckle House', tier: 1, track: 'Nest'},
		totalCost: 685
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '3_1_2.jpg',
		id: 100,
		kind: 'Mobility',
		name: 'Breakout',
		properties: _List_fromArray(
			['Breakout: Hold E to free yourself from Grabs.', '+50% Breakout Cooldown Reduction. (Base 60 seconds).']),
		supplyLine: {index: 13, name: 'Knuckle House', tier: 1, track: 'Nest'},
		totalCost: 785
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_Nil,
		filename: '3_0_2.jpg',
		id: 101,
		kind: 'Mobility',
		name: 'Fleet of Foot',
		properties: _List_fromArray(
			['+8% Move Speed', '-7% Damage Resistance']),
		supplyLine: {index: 14, name: 'Knuckle House', tier: 1, track: 'Nest'},
		totalCost: 835
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_Nil,
		filename: '4_1_1.jpg',
		id: 102,
		kind: 'Mobility',
		name: 'Pep In Your Step',
		properties: _List_fromArray(
			['Precision Kills grant you 8% Move Speed for 5 seconds.']),
		supplyLine: {index: 15, name: 'Knuckle House', tier: 1, track: 'Nest'},
		totalCost: 910
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_Nil,
		filename: '2_1_1.jpg',
		id: 103,
		kind: 'Utility',
		name: 'Guns Out',
		properties: _List_fromArray(
			['+50% Weapon Swap Speed', '-5% Damage Resistance']),
		supplyLine: {index: 16, name: 'The Crow\'s Nest', tier: 2, track: 'Nest'},
		totalCost: 960
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$AimSpeed,
				$author$project$Tags$RelativeMax(50)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$DamageResistance,
				$author$project$Tags$RelativeMax(-5)),
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerAimingDownSights,
				$author$project$Tags$Special('Every 0.75 seconds gives 5% Weakspot Damage (up to 3 stacks).'))
			]),
		filename: '2_0_3.jpg',
		id: 104,
		kind: 'Offense',
		name: 'Tunnel Vision',
		properties: _List_fromArray(
			['+50% Aim Speed', '-5% Damage Resistance', 'Every 0.75 seconds you Aim Down Sights gives 5% Weakspot Damage (up to 3 stacks).']),
		supplyLine: {index: 17, name: 'The Crow\'s Nest', tier: 2, track: 'Nest'},
		totalCost: 1010
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_Nil,
		filename: '1_0_1.jpg',
		id: 105,
		kind: 'Mobility',
		name: 'Energy Drink',
		properties: _List_fromArray(
			['+15% Stamina', '+25% Weapon Swap Speed', '+15% Move Speed while firing', '+10% Slow Resistance']),
		supplyLine: {index: 18, name: 'The Crow\'s Nest', tier: 2, track: 'Nest'},
		totalCost: 1055
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '4_0_4.jpg',
		id: 106,
		kind: 'Mobility',
		name: 'Marathon Runner',
		properties: _List_fromArray(
			['No Movement Penalty for strafe and backpedal.']),
		supplyLine: {index: 19, name: 'The Crow\'s Nest', tier: 2, track: 'Nest'},
		totalCost: 1160
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_Nil,
		filename: '1_1_2.jpg',
		id: 107,
		kind: 'Offense',
		name: 'Brazen',
		properties: _List_fromArray(
			['+20% Melee Stamina Efficiency', '+30% Melee Attack Speed', '-5% Damage Resistance']),
		supplyLine: {index: 20, name: 'Bridge Town', tier: 2, track: 'Nest'},
		totalCost: 1215
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '4_1_4.jpg',
		id: 108,
		kind: 'Offense',
		name: 'Sadistic',
		properties: _List_fromArray(
			['Gain 5% Weakspot Damage for each Precision Kill in the last 10 seconds.']),
		supplyLine: {index: 21, name: 'Bridge Town', tier: 2, track: 'Nest'},
		totalCost: 1315
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_Nil,
		filename: '3_1_0.jpg',
		id: 109,
		kind: 'Mobility',
		name: 'Olympic Sprinter',
		properties: _List_fromArray(
			['+30% Sprint Efficiency', '-7% Damage Resistance']),
		supplyLine: {index: 22, name: 'Bridge Town', tier: 2, track: 'Nest'},
		totalCost: 1365
	},
		{
		affinity: 'Fortune',
		cost: 100,
		effects: _List_Nil,
		filename: '15_0_4.jpg',
		id: 110,
		kind: 'Offense',
		name: 'Ammo Stash',
		properties: _List_fromArray(
			['Your secondary weapons have unlimited ammo.', 'Your secondary weapons reload -20% slower.']),
		supplyLine: {index: 23, name: 'Bridge Town', tier: 2, track: 'Nest'},
		totalCost: 1470
	},
		{
		affinity: 'Fortune',
		cost: 100,
		effects: _List_Nil,
		filename: '15_1_2.jpg',
		id: 111,
		kind: 'Utility',
		name: 'Compound Interest',
		properties: _List_fromArray(
			['Gain 10% of your total Copper in each Saferoom.']),
		supplyLine: {index: 24, name: 'Bridge Town', tier: 2, track: 'Nest'},
		totalCost: 1570
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_Nil,
		filename: '2_1_2.jpg',
		id: 112,
		kind: 'Utility',
		name: 'Cocky',
		properties: _List_fromArray(
			['+75% Weapon Swap Speed', 'When you take damage, your Accuracy is reduced by 20% for 3 seconds.']),
		supplyLine: {index: 25, name: 'Knuckle House', tier: 2, track: 'Nest'},
		totalCost: 1645
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_fromArray(
			[
				$author$project$Tags$Team(
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$Stamina,
					$author$project$Tags$RelativeMax(15)))
			]),
		filename: '4_1_0.jpg',
		id: 113,
		kind: 'Mobility',
		name: 'Mandatory PT',
		properties: _List_fromArray(
			['TEAM EFFECTS +15% Team Stamina']),
		supplyLine: {index: 26, name: 'Knuckle House', tier: 2, track: 'Nest'},
		totalCost: 1750
	},
		{
		affinity: 'Fortune',
		cost: 100,
		effects: _List_Nil,
		filename: '15_0_0.jpg',
		id: 114,
		kind: 'Utility',
		name: 'Mugger',
		properties: _List_fromArray(
			['Melee kills have a 3% chance to spawn ammo or razorwire.']),
		supplyLine: {index: 27, name: 'Knuckle House', tier: 2, track: 'Nest'},
		totalCost: 1855
	},
		{
		affinity: 'Brawn',
		cost: 70,
		effects: _List_Nil,
		filename: '11_0_4.jpg',
		id: 115,
		kind: 'Offense',
		name: 'Mean Drunk',
		properties: _List_fromArray(
			['+60% Melee Damage', 'Your Melee Attacks cause cleave through enemies dealing damage in a large area.', 'DISABLES: Sprint']),
		supplyLine: {index: 28, name: 'Knuckle House', tier: 2, track: 'Nest'},
		totalCost: 1925
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_Nil,
		filename: '5_0_4.jpg',
		id: 116,
		kind: 'Utility',
		name: 'Multitool',
		properties: _List_fromArray(
			['+75% Use Speed', '-5% Damage Resistance']),
		supplyLine: {index: 29, name: 'Knuckle House', tier: 2, track: 'Nest'},
		totalCost: 1970
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_Nil,
		filename: '5_1_2.jpg',
		id: 117,
		kind: 'Mobility',
		name: 'Stimulants',
		properties: _List_fromArray(
			['Pain Meds you apply also grant +20% Stamina Regeneration, + 15% Reload Speed, and + 15% Weapon Swap Speed for 30 seconds.']),
		supplyLine: {index: 30, name: 'The Crow\'s Nest', tier: 3, track: 'Nest'},
		totalCost: 2025
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_Nil,
		filename: '1_1_3.jpg',
		id: 118,
		kind: 'Offense',
		name: 'Meth Head',
		properties: _List_fromArray(
			['+40% Melee Attack Speed', '+30% Melee Stamina Efficiency', 'Your Melee Attacks no longer stick in tough enemies.', 'DISABLES: Aim Down Sights']),
		supplyLine: {index: 31, name: 'The Crow\'s Nest', tier: 3, track: 'Nest'},
		totalCost: 2095
	},
		{
		affinity: 'Reflex',
		cost: 150,
		effects: _List_Nil,
		filename: '4_1_2.jpg',
		id: 119,
		kind: 'Offense',
		name: 'Shredder',
		properties: _List_fromArray(
			['Each bullet hit causes the target to take 1% increased damage for 3 seconds (stacks up to 15% ).']),
		supplyLine: {index: 32, name: 'The Crow\'s Nest', tier: 3, track: 'Nest'},
		totalCost: 2250
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_Nil,
		filename: '3_1_1.jpg',
		id: 120,
		kind: 'Mobility',
		name: 'Reckless',
		properties: _List_fromArray(
			['+40% Sprint Efficiency', 'When you take damage while Sprinting, you lose all Stamina.']),
		supplyLine: {index: 33, name: 'Bridge Town', tier: 3, track: 'Nest'},
		totalCost: 2335
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_Nil,
		filename: '3_0_3.jpg',
		id: 121,
		kind: 'Mobility',
		name: 'Run Like Hell',
		properties: _List_fromArray(
			['+12% Move Speed', 'When you take damage, your Move Speed bonus is lost for 3 seconds.']),
		supplyLine: {index: 34, name: 'Bridge Town', tier: 3, track: 'Nest'},
		totalCost: 2405
	},
		{
		affinity: 'Reflex',
		cost: 150,
		effects: _List_Nil,
		filename: '6_0_0.jpg',
		id: 122,
		kind: 'Offense',
		name: 'Power Swap',
		properties: _List_fromArray(
			['Changing weapons within 1 second of reaching low ammo grants +20% Damage for 5 seconds.']),
		supplyLine: {index: 35, name: 'Bridge Town', tier: 3, track: 'Nest'},
		totalCost: 2555
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_Nil,
		filename: '1_0_2.jpg',
		id: 123,
		kind: 'Mobility',
		name: 'Rhythmic Breathing',
		properties: _List_fromArray(
			['+40% Stamina']),
		supplyLine: {index: 36, name: 'Bridge Town', tier: 3, track: 'Nest'},
		totalCost: 2625
	},
		{
		affinity: 'Reflex',
		cost: 45,
		effects: _List_Nil,
		filename: '5_1_3.jpg',
		id: 124,
		kind: 'Mobility',
		name: 'On your Mark...',
		properties: _List_fromArray(
			['When you exit a starting saferoom your team gains +15% Move Speed for 30 seconds.']),
		supplyLine: {index: 37, name: 'Bridge Town', tier: 3, track: 'Nest'},
		totalCost: 670
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '3_1_4.jpg',
		id: 125,
		kind: 'Mobility',
		name: 'Fire in the Hole!',
		properties: _List_fromArray(
			['When you throw an Offensive Accessory, gain 20 Temporary Health and 20% Move Speed for 5 seconds.']),
		supplyLine: {index: 38, name: 'Bridge Town', tier: 3, track: 'Nest'},
		totalCost: 770
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_Nil,
		filename: '5_1_0.jpg',
		id: 126,
		kind: 'Utility',
		name: 'Headband Magnifier',
		properties: _List_fromArray(
			['+125% Use Speed', 'When you take damage, you have a chance to be blinded for 1 second.']),
		supplyLine: {index: 39, name: 'Bridge Town', tier: 3, track: 'Nest'},
		totalCost: 2840
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_Nil,
		filename: '8_0_0.jpg',
		id: 127,
		kind: 'Mobility',
		name: 'Cold Brew Coffee',
		properties: _List_fromArray(
			['+25% Aim Speed', '+25% Weapon Swap Speed', '+25% Use Speed', '+15% Reload Speed']),
		supplyLine: {index: 40, name: 'Knuckle House', tier: 3, track: 'Nest'},
		totalCost: 2925
	},
		{
		affinity: 'Reflex',
		cost: 70,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$WeakspotDamage,
				$author$project$Tags$RelativeMax(50)),
				A2(
				$author$project$Tags$While,
				$author$project$Tags$PlayerAttacking,
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$MoveSpeed,
					$author$project$Tags$RelativeMax(-40)))
			]),
		filename: '2_0_1.jpg',
		id: 128,
		kind: 'Offense',
		name: 'Hyper-Focused',
		properties: _List_fromArray(
			['+50% Weakspot Damage', '-40% Move Speed while shooting or melee attacking.']),
		supplyLine: {index: 41, name: 'Knuckle House', tier: 3, track: 'Nest'},
		totalCost: 2995
	},
		{
		affinity: 'Discipline',
		cost: 100,
		effects: _List_Nil,
		filename: '10_1_1.jpg',
		id: 129,
		kind: 'Utility',
		name: 'Knowledge is Power',
		properties: _List_fromArray(
			['+10% Weakspoť Damage', 'Allows players to see values for damage they deal and enemy health bars.']),
		supplyLine: {index: 42, name: 'Knuckle House', tier: 3, track: 'Nest'},
		totalCost: 3100
	},
		{
		affinity: 'Fortune',
		cost: 100,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Triggered,
				$author$project$Tags$OnKill($author$project$Tags$Mutation),
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$Copper,
					$author$project$Tags$AbsoluteCurrent(10)))
			]),
		filename: '15_0_3.jpg',
		id: 130,
		kind: 'Utility',
		name: 'Bounty Hunter',
		properties: _List_fromArray(
			['When you kill a Mutation, gain 10 Copper (up to 300 per level).']),
		supplyLine: {index: 43, name: 'Crow\'s Nest', tier: 4, track: 'Nest'},
		totalCost: 3205
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '4_0_2.jpg',
		id: 131,
		kind: 'Mobility',
		name: 'Speed Demon',
		properties: _List_fromArray(
			['+4% Move Speed while using an SMG.', '+35% Reload Speed while using an SMG.']),
		supplyLine: {index: 44, name: 'Crow\'s Nest', tier: 4, track: 'Nest'},
		totalCost: 3310
	},
		{
		affinity: 'Discipline',
		cost: 70,
		effects: _List_Nil,
		filename: '8_0_1.jpg',
		id: 132,
		kind: 'Mobility',
		name: 'Natural Sprinter',
		properties: _List_fromArray(
			['+100% Stamina Regeneration', '-50% Maximum Stamina']),
		supplyLine: {index: 45, name: 'Crow\'s Nest', tier: 4, track: 'Nest'},
		totalCost: 3380
	},
		{
		affinity: 'Reflex',
		cost: 100,
		effects: _List_Nil,
		filename: '4_0_3.jpg',
		id: 133,
		kind: 'Mobility',
		name: 'Hellfire',
		properties: _List_fromArray(
			['+45% Move Speed while firing.', '+5% Move Speed while not firing.']),
		supplyLine: {index: 46, name: 'Bridge Town', tier: 4, track: 'Nest'},
		totalCost: 3550
	},
		{
		affinity: 'Reflex',
		cost: 75,
		effects: _List_Nil,
		filename: '6_0_3.jpg',
		id: 134,
		kind: 'Mobility',
		name: 'Mad Dash',
		properties: _List_fromArray(
			['+20% Sprint Speed', '-40% Sprint Stamina Efficiency']),
		supplyLine: {index: 47, name: 'The Crow\'s Nest', tier: 5, track: 'Nest'},
		totalCost: 4310
	},
		{
		affinity: 'Fortune',
		cost: 75,
		effects: _List_Nil,
		filename: '16_0_4.jpg',
		id: 135,
		kind: 'Utility',
		name: 'Hazard Pay',
		properties: _List_fromArray(
			['Gain 250 bonus Copper at the start of each level.']),
		supplyLine: {index: 48, name: 'Bridge Town', tier: 5, track: 'Nest'},
		totalCost: 4740
	},
		{
		affinity: 'Discipline',
		cost: 0,
		effects: _List_Nil,
		filename: '7_1_1.jpg',
		id: 136,
		kind: 'Defense',
		name: 'Antibiotic Ointment',
		properties: _List_fromArray(
			['+20% Healing Efficiency']),
		supplyLine: {index: -1, name: 'Starter Deck', tier: 1, track: 'Starter'},
		totalCost: 0
	},
		{
		affinity: 'Brawn',
		cost: 0,
		effects: _List_Nil,
		filename: '12_1_4.jpg',
		id: 137,
		kind: 'Defense',
		name: 'Battle Lust',
		properties: _List_fromArray(
			['Melee kills heal 2 Health.']),
		supplyLine: {index: -1, name: 'Starter Deck', tier: 1, track: 'Starter'},
		totalCost: 0
	},
		{
		affinity: 'Discipline',
		cost: 0,
		effects: _List_Nil,
		filename: '9_0_0.jpg',
		id: 138,
		kind: 'Offense',
		name: 'Combat Knife',
		properties: _List_fromArray(
			['Turns your Bash into a Knife that counts as a Melee weapon.']),
		supplyLine: {index: -1, name: 'Starter Deck', tier: 1, track: 'Starter'},
		totalCost: 0
	},
		{
		affinity: 'Fortune',
		cost: 0,
		effects: _List_Nil,
		filename: '16_0_1.jpg',
		id: 139,
		kind: 'Utility',
		name: 'Copper Scavenger',
		properties: _List_fromArray(
			['You can sense nearby Copper.', 'More Copper Piles spawn.']),
		supplyLine: {index: -1, name: 'Starter Deck', tier: 1, track: 'Starter'},
		totalCost: 0
	},
		{
		affinity: 'Reflex',
		cost: 0,
		effects: _List_Nil,
		filename: '1_0_3.jpg',
		id: 140,
		kind: 'Offense',
		name: 'Reload Drills',
		properties: _List_fromArray(
			['+20% Reload Speed']),
		supplyLine: {index: -1, name: 'Starter Deck', tier: 1, track: 'Starter'},
		totalCost: 0
	},
		{
		affinity: 'Brawn',
		cost: 0,
		effects: _List_Nil,
		filename: '14_0_3.jpg',
		id: 141,
		kind: 'Defense',
		name: 'Second Chance',
		properties: _List_fromArray(
			['+1 Extra Life', '+5 Health']),
		supplyLine: {index: -1, name: 'Starter Deck', tier: 1, track: 'Starter'},
		totalCost: 0
	},
		{
		affinity: 'Fortune',
		cost: 0,
		effects: _List_Nil,
		filename: '15_1_1.jpg',
		id: 142,
		kind: 'Defense',
		name: 'Wounded Animal',
		properties: _List_fromArray(
			['Kills while at Critical Health recover 1 Health.']),
		supplyLine: {index: -1, name: 'Starter Deck', tier: 1, track: 'Starter'},
		totalCost: 0
	},
		{
		affinity: 'Brawn',
		cost: 5,
		effects: _List_Nil,
		filename: '10_1_4.jpg',
		id: 143,
		kind: 'Defense',
		name: 'Vitamins',
		properties: _List_fromArray(
			['+15 Health']),
		supplyLine: {index: 1, name: 'The Strip', tier: 1, track: 'Strip'},
		totalCost: 0
	},
		{
		affinity: 'Discipline',
		cost: 10,
		effects: _List_Nil,
		filename: '6_0_4.jpg',
		id: 144,
		kind: 'Offense',
		name: 'Ammo Pouch',
		properties: _List_fromArray(
			['+25% Ammo Сарacity']),
		supplyLine: {index: 2, name: 'The Strip', tier: 1, track: 'Strip'},
		totalCost: 0
	},
		{
		affinity: 'Brawn',
		cost: 100,
		effects: _List_Nil,
		filename: '13_0_3.jpg',
		id: 145,
		kind: 'Offense',
		name: 'Heavy Attack',
		properties: _List_fromArray(
			['Charge: Hold with Melee weapons to burst forward. Charge attacks deal 100% increased damage.']),
		supplyLine: {index: 5, name: 'The Strip', tier: 1, track: 'Strip'},
		totalCost: 145
	},
		{
		affinity: 'Reflex',
		cost: 0,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Triggered,
				$author$project$Tags$OnKill($author$project$Tags$AnyEnemy),
				A2(
					$author$project$Tags$OverTime,
					7,
					A2(
						$author$project$Tags$Passive,
						$author$project$Tags$Stamina,
						$author$project$Tags$AbsoluteCurrent(7))))
			]),
		filename: '5_0_1.jpg',
		id: 146,
		kind: 'Offense',
		name: 'Adrenaline Fueled',
		properties: _List_fromArray(
			['When you kill an enemy, gain 7 Stamina over 7 seconds, stacking up to 5 times.']),
		supplyLine: {index: -1, name: 'Brought a Knife to a Gunfight', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Discipline',
		cost: 0,
		effects: _List_Nil,
		filename: '9_1_4.jpg',
		id: 147,
		kind: 'Utility',
		name: 'Ammo Scavenger',
		properties: _List_fromArray(
			['You can sense nearby Ammo.', 'More Ammo spawns.']),
		supplyLine: {index: -1, name: 'Ammo Scavenger', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Brawn',
		cost: 0,
		effects: _List_Nil,
		filename: '12_0_4.jpg',
		id: 148,
		kind: 'Offense',
		name: 'Berserker',
		properties: _List_fromArray(
			['Gain 10% Melee Damage,10% Melee Speed, and 5% Move Speed for each Melee kill in the last 4 seconds.']),
		supplyLine: {index: -1, name: 'Berserker', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Brawn',
		cost: 0,
		effects: _List_Nil,
		filename: '12_0_1.jpg',
		id: 149,
		kind: 'Offense',
		name: 'Confident Killer',
		properties: _List_fromArray(
			['When you or your team kills a Mutation gain 1% damage (up to -15%) until the end of the level.']),
		supplyLine: {index: -1, name: 'Smorgasbord', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Discipline',
		cost: 0,
		effects: _List_Nil,
		filename: '7_1_3.jpg',
		id: 150,
		kind: 'Defense',
		name: 'Field Surgeon',
		properties: _List_fromArray(
			['+60% Healing Efficiency', '-50% Use Speed']),
		supplyLine: {index: -1, name: 'Field Surgeon', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Fortune',
		cost: 0,
		effects: _List_Nil,
		filename: '15_1_3.jpg',
		id: 151,
		kind: 'Utility',
		name: 'Lucky Pennies',
		properties: _List_fromArray(
			['Whenever you or your team loots Copper, you have a 35% chance to find 35% additional Copper.']),
		supplyLine: {index: -1, name: 'Jukebox Hero', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Reflex',
		cost: 0,
		effects: _List_Nil,
		filename: '6_0_2.jpg',
		id: 152,
		kind: 'Offense',
		name: 'Mag Carrier',
		properties: _List_fromArray(
			['+30% Pistol/SMG Ammo Capacity', '+10% Damage with Pistols and SMGS']),
		supplyLine: {index: -1, name: 'Mag Carrier', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Discipline',
		cost: 0,
		effects: _List_Nil,
		filename: '9_0_1.jpg',
		id: 153,
		kind: 'Offense',
		name: 'Meatgrinder',
		properties: _List_fromArray(
			['Gain 30% Move Speed and Accuracy while crouched and using an LMG.']),
		supplyLine: {index: -1, name: 'Meatgrinder', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Fortune',
		cost: 0,
		effects: _List_Nil,
		filename: '16_0_3.jpg',
		id: 154,
		kind: 'Offense',
		name: 'Shell Carrier',
		properties: _List_fromArray(
			['+30% Shotgun Ammo Capacity', '+10% Damage with Shotguns']),
		supplyLine: {index: -1, name: 'Shell Carrier', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Reflex',
		cost: 0,
		effects: _List_Nil,
		filename: '6_0_1.jpg',
		id: 155,
		kind: 'Offense',
		name: 'Stock Pouch',
		properties: _List_fromArray(
			['+30% Sniper Ammo Capacity', '+10% Damage with Sniper Rifles']),
		supplyLine: {index: -1, name: 'Stock Pouch', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Discipline',
		cost: 0,
		effects: _List_Nil,
		filename: '10_1_2.jpg',
		id: 156,
		kind: 'Offense',
		name: 'Tactical Vest',
		properties: _List_fromArray(
			['+30% Rifle Ammo Capacity', '+10% Damage with Assault Rifles and LMGS']),
		supplyLine: {index: -1, name: 'Tactical Vest', tier: 1, track: 'Accomplishment'},
		totalCost: 0
	},
		{
		affinity: 'Fortune',
		cost: 50,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$SupportAccessoryCount,
				$author$project$Tags$AbsoluteMax(1))
			]),
		filename: '16_1_1.jpg',
		id: 157,
		kind: 'Utility',
		name: 'Belt Clip',
		properties: _List_fromArray(
			['+1 Quick Slot Inventory']),
		supplyLine: {index: 1, name: 'Liberators', tier: 1, track: 'Roving Merchants'},
		totalCost: -1
	},
		{
		affinity: 'Fortune',
		cost: 75,
		effects: _List_fromArray(
			[
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$SupportAccessoryCount,
				$author$project$Tags$AbsoluteMax(1)),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Damage,
				$author$project$Tags$RelativeMax(-10))
			]),
		filename: '16_1_2.jpg',
		id: 158,
		kind: 'Utility',
		name: 'Utility Belt',
		properties: _List_fromArray(
			['+2 Quick Slot Inventory', '-10% Damage Dealt']),
		supplyLine: {index: 2, name: 'Liberators', tier: 1, track: 'Roving Merchants'},
		totalCost: -1
	},
		{
		affinity: 'Fortune',
		cost: 100,
		effects: _List_fromArray(
			[
				$author$project$Tags$Team(
				A2(
					$author$project$Tags$Passive,
					$author$project$Tags$QuickAccessoryCount,
					$author$project$Tags$AbsoluteMax(1))),
				A2(
				$author$project$Tags$Passive,
				$author$project$Tags$Health,
				$author$project$Tags$RelativeMax(-10))
			]),
		filename: '16_1_3.jpg',
		id: 159,
		kind: 'Utility',
		name: 'Tool Belts',
		properties: _List_fromArray(
			['-10% Health', '+1 Team Quick Item Inventory']),
		supplyLine: {index: 2, name: 'KSC Convoys', tier: 1, track: 'Roving Merchants'},
		totalCost: -1
	}
	]);
var $author$project$Cards$cards = A2($elm$core$List$map, $author$project$Cards$parseRawCard, $author$project$CardData$rawCards);
var $rundis$elm_bootstrap$Bootstrap$Alert$Closed = {$: 'Closed'};
var $rundis$elm_bootstrap$Bootstrap$Alert$closed = $rundis$elm_bootstrap$Bootstrap$Alert$Closed;
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Modal$Hide = {$: 'Hide'};
var $rundis$elm_bootstrap$Bootstrap$Modal$hidden = $rundis$elm_bootstrap$Bootstrap$Modal$Hide;
var $rundis$elm_bootstrap$Bootstrap$Navbar$Hidden = {$: 'Hidden'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$State = function (a) {
	return {$: 'State', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var $rundis$elm_bootstrap$Bootstrap$Navbar$mapState = F2(
	function (mapper, _v0) {
		var state = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Navbar$State(
			mapper(state));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$initWindowSize = F2(
	function (toMsg, state) {
		return A2(
			$elm$core$Task$perform,
			function (vp) {
				return toMsg(
					A2(
						$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
						function (s) {
							return _Utils_update(
								s,
								{
									windowWidth: $elm$core$Maybe$Just(vp.viewport.width)
								});
						},
						state));
			},
			$elm$browser$Browser$Dom$getViewport);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$initialState = function (toMsg) {
	var state = $rundis$elm_bootstrap$Bootstrap$Navbar$State(
		{dropdowns: $elm$core$Dict$empty, height: $elm$core$Maybe$Nothing, visibility: $rundis$elm_bootstrap$Bootstrap$Navbar$Hidden, windowWidth: $elm$core$Maybe$Nothing});
	return _Utils_Tuple2(
		state,
		A2($rundis$elm_bootstrap$Bootstrap$Navbar$initWindowSize, toMsg, state));
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$Main$cardIdLength = 3;
var $author$project$String$Extras$chunks = F2(
	function (size, string) {
		var run = F2(
			function (accumulator, remaining) {
				run:
				while (true) {
					if (remaining === '') {
						return accumulator;
					} else {
						var text = remaining;
						var $temp$accumulator = A2(
							$elm$core$List$cons,
							A3($elm$core$String$slice, 0, size, text),
							accumulator),
							$temp$remaining = A2($elm$core$String$dropLeft, size, text);
						accumulator = $temp$accumulator;
						remaining = $temp$remaining;
						continue run;
					}
				}
			});
		return $elm$core$List$reverse(
			A2(run, _List_Nil, string));
	});
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $elm_community$maybe_extra$Maybe$Extra$combine = A2(
	$elm$core$List$foldr,
	$elm$core$Maybe$map2($elm$core$List$cons),
	$elm$core$Maybe$Just(_List_Nil));
var $author$project$Main$parseCardIds = function (query) {
	return $elm_community$maybe_extra$Maybe$Extra$combine(
		A2(
			$elm$core$List$map,
			$elm$core$String$toInt,
			A2($author$project$String$Extras$chunks, $author$project$Main$cardIdLength, query)));
};
var $rundis$elm_bootstrap$Bootstrap$Alert$Shown = {$: 'Shown'};
var $rundis$elm_bootstrap$Bootstrap$Alert$shown = $rundis$elm_bootstrap$Bootstrap$Alert$Shown;
var $sporto$qs$QS$Config = function (a) {
	return {$: 'Config', a: a};
};
var $sporto$qs$QS$config = $sporto$qs$QS$Config(
	{addQuestionMark: true, encodeBrackets: true});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $sporto$qs$QS$Many = function (a) {
	return {$: 'Many', a: a};
};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $sporto$qs$QS$get = F2(
	function (key, query) {
		return A2($elm$core$Dict$get, key, query);
	});
var $elm$core$String$trim = _String_trim;
var $sporto$qs$QS$rawValueToValue = F2(
	function (cfg, val) {
		var trimmed = $elm$core$String$trim(val);
		var isEmpty = trimmed === '';
		return isEmpty ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(trimmed);
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $sporto$qs$QS$set = F3(
	function (key, value, query) {
		return A3($elm$core$Dict$insert, key, value, query);
	});
var $sporto$qs$QS$addListValToQuery = F4(
	function (cfg, key, rawValue, query) {
		var currentVals = A2($sporto$qs$QS$get, key, query);
		var pushValue = function (value) {
			if (currentVals.$ === 'Just') {
				if (currentVals.a.$ === 'Many') {
					var vals = currentVals.a.a;
					return $sporto$qs$QS$Many(
						A2(
							$elm$core$List$append,
							vals,
							_List_fromArray(
								[value])));
				} else {
					var preValue = currentVals.a.a;
					return $sporto$qs$QS$Many(
						_List_fromArray(
							[preValue, value]));
				}
			} else {
				return $sporto$qs$QS$Many(
					_List_fromArray(
						[value]));
			}
		};
		var _v0 = A2($sporto$qs$QS$rawValueToValue, cfg, rawValue);
		if (_v0.$ === 'Nothing') {
			return query;
		} else {
			var value = _v0.a;
			return A3(
				$sporto$qs$QS$set,
				key,
				pushValue(value),
				query);
		}
	});
var $sporto$qs$QS$One = function (a) {
	return {$: 'One', a: a};
};
var $sporto$qs$QS$addUniqueValToQuery = F4(
	function (cfg, key, val, query) {
		var _v0 = A2($sporto$qs$QS$rawValueToValue, cfg, val);
		if (_v0.$ === 'Nothing') {
			return query;
		} else {
			var value = _v0.a;
			return A3(
				$sporto$qs$QS$set,
				key,
				$sporto$qs$QS$One(value),
				query);
		}
	});
var $elm$core$String$dropRight = F2(
	function (n, string) {
		return (n < 1) ? string : A3($elm$core$String$slice, 0, -n, string);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $sporto$qs$QS$querySegmentToTuple = function (element) {
	var splitted = A2($elm$core$String$split, '=', element);
	var second = A2(
		$elm$core$Maybe$withDefault,
		'',
		$elm$core$List$head(
			A2($elm$core$List$drop, 1, splitted)));
	var secondDecoded = A2(
		$elm$core$Maybe$withDefault,
		'',
		$elm$url$Url$percentDecode(second));
	var first = A2(
		$elm$core$Maybe$withDefault,
		'',
		$elm$core$List$head(splitted));
	var firstDecoded = A2(
		$elm$core$Maybe$withDefault,
		'',
		$elm$url$Url$percentDecode(first));
	return _Utils_Tuple2(firstDecoded, secondDecoded);
};
var $sporto$qs$QS$addSegmentToQuery = F3(
	function (cfg, segment, query) {
		var _v0 = $sporto$qs$QS$querySegmentToTuple(segment);
		var key = _v0.a;
		var val = _v0.b;
		if (A2($elm$core$String$endsWith, '[]', key)) {
			var newKey = A2($elm$core$String$dropRight, 2, key);
			return A4($sporto$qs$QS$addListValToQuery, cfg, newKey, val, query);
		} else {
			return A4($sporto$qs$QS$addUniqueValToQuery, cfg, key, val, query);
		}
	});
var $sporto$qs$QS$empty = $elm$core$Dict$empty;
var $sporto$qs$QS$parse = F2(
	function (_v0, queryString) {
		var cfg = _v0.a;
		var trimmed = A2(
			$elm$core$String$join,
			'',
			A2($elm$core$String$split, '?', queryString));
		return $elm$core$String$isEmpty(trimmed) ? $sporto$qs$QS$empty : A3(
			$elm$core$List$foldl,
			$sporto$qs$QS$addSegmentToQuery(cfg),
			$sporto$qs$QS$empty,
			A2($elm$core$String$split, '&', trimmed));
	});
var $author$project$Main$tryDeckQueryArgument = function (url) {
	var dict = A2(
		$elm$core$Maybe$map,
		$sporto$qs$QS$parse($sporto$qs$QS$config),
		url.query);
	var val = A2(
		$elm$core$Maybe$andThen,
		$elm$core$Dict$get('deck'),
		dict);
	if (val.$ === 'Just') {
		if (val.a.$ === 'One') {
			var o = val.a.a;
			return $elm$core$Maybe$Just(o);
		} else {
			if (val.a.a.b) {
				var _v1 = val.a.a;
				var head = _v1.a;
				return $elm$core$Maybe$Just(head);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return $elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2($elm$core$Set$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2($elm$core$Set$insert, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2($elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$unique = function (list) {
	return A4($elm_community$list_extra$List$Extra$uniqueHelp, $elm$core$Basics$identity, $elm$core$Set$empty, list, _List_Nil);
};
var $elm_community$maybe_extra$Maybe$Extra$cons = F2(
	function (item, list) {
		if (item.$ === 'Just') {
			var v = item.a;
			return A2($elm$core$List$cons, v, list);
		} else {
			return list;
		}
	});
var $elm_community$maybe_extra$Maybe$Extra$values = A2($elm$core$List$foldr, $elm_community$maybe_extra$Maybe$Extra$cons, _List_Nil);
var $author$project$Main$init = F3(
	function (flags, url, key) {
		var hostUrl = _Utils_update(
			url,
			{fragment: $elm$core$Maybe$Nothing, query: $elm$core$Maybe$Nothing});
		var cardIdsFromQuery = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				$elm_community$list_extra$List$Extra$unique,
				A2(
					$elm$core$Maybe$andThen,
					$author$project$Main$parseCardIds,
					$author$project$Main$tryDeckQueryArgument(url))));
		var selected = $elm_community$maybe_extra$Maybe$Extra$values(
			A2(
				$elm$core$List$map,
				function (c) {
					return A2(
						$elm_community$list_extra$List$Extra$find,
						function (cc) {
							return _Utils_eq(cc.id, c);
						},
						$author$project$Cards$cards);
				},
				cardIdsFromQuery));
		var notSelected = A2(
			$elm$core$List$filter,
			function (c) {
				return A2(
					$elm$core$List$all,
					$elm$core$Basics$neq(c),
					selected);
			},
			$author$project$Cards$cards);
		var _v0 = $rundis$elm_bootstrap$Bootstrap$Navbar$initialState($author$project$Main$NavbarMsg);
		var navbarState = _v0.a;
		var navbarCmd = _v0.b;
		return _Utils_Tuple2(
			{
				cardDisplay: (flags.windowWidth < 769) ? $author$project$Main$Text : $author$project$Main$Image,
				cardPool: $author$project$Cards$cards,
				filter: $elm$core$Maybe$Nothing,
				helpModalVisibility: $rundis$elm_bootstrap$Bootstrap$Modal$hidden,
				hostUrl: hostUrl,
				inventoryDisplay: $author$project$Main$InventoryAsCards,
				navKey: key,
				navbarState: navbarState,
				notSelectedCards: notSelected,
				returnViewHintVisibility: $rundis$elm_bootstrap$Bootstrap$Alert$closed,
				selectedCards: selected,
				shareModalVisibility: $rundis$elm_bootstrap$Bootstrap$Modal$hidden,
				showCardPoolDetails: false,
				summarizeViewHintVisibility: $rundis$elm_bootstrap$Bootstrap$Alert$shown,
				yesNoModalContent: $elm$core$Maybe$Nothing,
				yesNoModalVisibility: $rundis$elm_bootstrap$Bootstrap$Modal$hidden
			},
			navbarCmd);
	});
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Main$CopyShareUrlResult = function (a) {
	return {$: 'CopyShareUrlResult', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $author$project$Main$receiveCopyResult = _Platform_incomingPort('receiveCopyResult', $elm$json$Json$Decode$bool);
var $rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingDown = {$: 'AnimatingDown'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingUp = {$: 'AnimatingUp'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$Closed = {$: 'Closed'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$ListenClicks = {$: 'ListenClicks'};
var $rundis$elm_bootstrap$Bootstrap$Navbar$Open = {$: 'Open'};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 'Time', a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {oldTime: oldTime, request: request, subs: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$browser$Browser$AnimationManager$now = _Browser_now(_Utils_Tuple0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(_Utils_Tuple0);
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.request;
		var oldTime = _v0.oldTime;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 'Nothing') {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.subs;
		var oldTime = _v0.oldTime;
		var send = function (sub) {
			if (sub.$ === 'Time') {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 'Delta', a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (sub.$ === 'Time') {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrame = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Time(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrame = $elm$browser$Browser$AnimationManager$onAnimationFrame;
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onClick = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'click');
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdownSubscriptions = F2(
	function (state, toMsg) {
		var dropdowns = state.a.dropdowns;
		var updDropdowns = A2(
			$elm$core$Dict$map,
			F2(
				function (_v2, status) {
					switch (status.$) {
						case 'Open':
							return $rundis$elm_bootstrap$Bootstrap$Navbar$ListenClicks;
						case 'ListenClicks':
							return $rundis$elm_bootstrap$Bootstrap$Navbar$Closed;
						default:
							return $rundis$elm_bootstrap$Bootstrap$Navbar$Closed;
					}
				}),
			dropdowns);
		var updState = A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
			function (s) {
				return _Utils_update(
					s,
					{dropdowns: updDropdowns});
			},
			state);
		var needsSub = function (s) {
			return A2(
				$elm$core$List$any,
				function (_v1) {
					var status = _v1.b;
					return _Utils_eq(status, s);
				},
				$elm$core$Dict$toList(dropdowns));
		};
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					needsSub($rundis$elm_bootstrap$Bootstrap$Navbar$Open) ? $elm$browser$Browser$Events$onAnimationFrame(
					function (_v0) {
						return toMsg(updState);
					}) : $elm$core$Platform$Sub$none,
					needsSub($rundis$elm_bootstrap$Bootstrap$Navbar$ListenClicks) ? $elm$browser$Browser$Events$onClick(
					$elm$json$Json$Decode$succeed(
						toMsg(updState))) : $elm$core$Platform$Sub$none
				]));
	});
var $elm$browser$Browser$Events$Window = {$: 'Window'};
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		$elm$browser$Browser$Events$Window,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$subscriptions = F2(
	function (state, toMsg) {
		var visibility = state.a.visibility;
		var updState = function (v) {
			return A2(
				$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
				function (s) {
					return _Utils_update(
						s,
						{visibility: v});
				},
				state);
		};
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					function () {
					switch (visibility.$) {
						case 'StartDown':
							return $elm$browser$Browser$Events$onAnimationFrame(
								function (_v1) {
									return toMsg(
										updState($rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingDown));
								});
						case 'StartUp':
							return $elm$browser$Browser$Events$onAnimationFrame(
								function (_v2) {
									return toMsg(
										updState($rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingUp));
								});
						default:
							return $elm$core$Platform$Sub$none;
					}
				}(),
					$elm$browser$Browser$Events$onResize(
					F2(
						function (x, _v3) {
							return toMsg(
								A2(
									$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
									function (s) {
										return _Utils_update(
											s,
											{
												windowWidth: $elm$core$Maybe$Just(x)
											});
									},
									state));
						})),
					A2($rundis$elm_bootstrap$Bootstrap$Navbar$dropdownSubscriptions, state, toMsg)
				]));
	});
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2($rundis$elm_bootstrap$Bootstrap$Navbar$subscriptions, model.navbarState, $author$project$Main$NavbarMsg),
				$author$project$Main$receiveCopyResult($author$project$Main$CopyShareUrlResult)
			]));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$copy = _Platform_outgoingPort('copy', $elm$json$Json$Encode$string);
var $elm$core$Debug$log = _Debug_log;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $elm_community$list_extra$List$Extra$remove = F2(
	function (x, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var y = xs.a;
			var ys = xs.b;
			return _Utils_eq(x, y) ? ys : A2(
				$elm$core$List$cons,
				y,
				A2($elm_community$list_extra$List$Extra$remove, x, ys));
		}
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $author$project$Main$shareUrl = function (model) {
	var query = A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$List$map,
			function (c) {
				return A3(
					$elm$core$String$padLeft,
					3,
					_Utils_chr('0'),
					$elm$core$String$fromInt(c.id));
			},
			model.selectedCards));
	var hostUrl = model.hostUrl;
	return _Utils_update(
		hostUrl,
		{
			query: $elm$core$Maybe$Just('deck=' + query)
		});
};
var $rundis$elm_bootstrap$Bootstrap$Modal$Show = {$: 'Show'};
var $rundis$elm_bootstrap$Bootstrap$Modal$shown = $rundis$elm_bootstrap$Bootstrap$Modal$Show;
var $author$project$List$Extras$elemIndexBy = F2(
	function (predicate, list) {
		var run = F2(
			function (index, remaining) {
				run:
				while (true) {
					if (!remaining.b) {
						return $elm$core$Maybe$Nothing;
					} else {
						var head = remaining.a;
						var tail = remaining.b;
						if (predicate(head)) {
							return $elm$core$Maybe$Just(index);
						} else {
							var $temp$index = index + 1,
								$temp$remaining = tail;
							index = $temp$index;
							remaining = $temp$remaining;
							continue run;
						}
					}
				}
			});
		return A2(run, 0, list);
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm_community$list_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $elm_community$list_extra$List$Extra$uncons = function (list) {
	if (!list.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var first = list.a;
		var rest = list.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(first, rest));
	}
};
var $elm_community$list_extra$List$Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_Utils_eq(index1, index2) || (index1 < 0)) {
				return l;
			} else {
				if (_Utils_cmp(index1, index2) > 0) {
					var $temp$index1 = index2,
						$temp$index2 = index1,
						$temp$l = l;
					index1 = $temp$index1;
					index2 = $temp$index2;
					l = $temp$l;
					continue swapAt;
				} else {
					var _v0 = A2($elm_community$list_extra$List$Extra$splitAt, index1, l);
					var part1 = _v0.a;
					var tail1 = _v0.b;
					var _v1 = A2($elm_community$list_extra$List$Extra$splitAt, index2 - index1, tail1);
					var head2 = _v1.a;
					var tail2 = _v1.b;
					var _v2 = _Utils_Tuple2(
						$elm_community$list_extra$List$Extra$uncons(head2),
						$elm_community$list_extra$List$Extra$uncons(tail2));
					if ((_v2.a.$ === 'Just') && (_v2.b.$ === 'Just')) {
						var _v3 = _v2.a.a;
						var value1 = _v3.a;
						var part2 = _v3.b;
						var _v4 = _v2.b.a;
						var value2 = _v4.a;
						var part3 = _v4.b;
						return $elm$core$List$concat(
							_List_fromArray(
								[
									part1,
									A2($elm$core$List$cons, value2, part2),
									A2($elm$core$List$cons, value1, part3)
								]));
					} else {
						return l;
					}
				}
			}
		}
	});
var $author$project$Main$swapCardsBy = F3(
	function (predicate, stepSize, cards) {
		var index = A2($author$project$List$Extras$elemIndexBy, predicate, cards);
		if (index.$ === 'Just') {
			var i = index.a;
			return A3($elm_community$list_extra$List$Extra$swapAt, i, i + stepSize, cards);
		} else {
			return A2($elm$core$Debug$log, 'Tried to swap cards for a card not found in the set.', cards);
		}
	});
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 'Nothing') {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 'Nothing') {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.protocol;
		if (_v0.$ === 'Http') {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.fragment,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.query,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.port_,
					_Utils_ap(http, url.host)),
				url.path)));
};
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'NavbarMsg':
				var state = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{navbarState: state}),
					$elm$core$Platform$Cmd$none);
			case 'UrlChanged':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'LinkClicked':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'ToggleInventory':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'ShowShareModal':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{shareModalVisibility: $rundis$elm_bootstrap$Bootstrap$Modal$shown}),
					$elm$core$Platform$Cmd$none);
			case 'HideShareModal':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{shareModalVisibility: $rundis$elm_bootstrap$Bootstrap$Modal$hidden}),
					$elm$core$Platform$Cmd$none);
			case 'ShowYesNoModal':
				var content = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							yesNoModalContent: $elm$core$Maybe$Just(content),
							yesNoModalVisibility: $rundis$elm_bootstrap$Bootstrap$Modal$shown
						}),
					$elm$core$Platform$Cmd$none);
			case 'ToggleHelpModal':
				var visibility = _Utils_eq(model.helpModalVisibility, $rundis$elm_bootstrap$Bootstrap$Modal$shown) ? $rundis$elm_bootstrap$Bootstrap$Modal$hidden : $rundis$elm_bootstrap$Bootstrap$Modal$shown;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{helpModalVisibility: visibility}),
					$elm$core$Platform$Cmd$none);
			case 'ToggleSummarizeViewHint':
				var visibility = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{summarizeViewHintVisibility: visibility}),
					$elm$core$Platform$Cmd$none);
			case 'ConfirmResetModal':
				var updatedModel = _Utils_update(
					model,
					{notSelectedCards: $author$project$Cards$cards, selectedCards: _List_Nil, yesNoModalContent: $elm$core$Maybe$Nothing, yesNoModalVisibility: $rundis$elm_bootstrap$Bootstrap$Modal$hidden});
				var url = $elm$url$Url$toString(
					$author$project$Main$shareUrl(updatedModel));
				return _Utils_Tuple2(
					updatedModel,
					A2($elm$browser$Browser$Navigation$pushUrl, model.navKey, url));
			case 'RejectResetModal':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{yesNoModalContent: $elm$core$Maybe$Nothing, yesNoModalVisibility: $rundis$elm_bootstrap$Bootstrap$Modal$hidden}),
					$elm$core$Platform$Cmd$none);
			case 'ToggleCardDetails':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{showCardPoolDetails: !model.showCardPoolDetails}),
					$elm$core$Platform$Cmd$none);
			case 'CopyShareUrl':
				var url = msg.a;
				return _Utils_Tuple2(
					model,
					$author$project$Main$copy(url));
			case 'CopyShareUrlResult':
				var result = msg.a;
				return result ? _Utils_Tuple2(
					_Utils_update(
						model,
						{shareModalVisibility: $rundis$elm_bootstrap$Bootstrap$Modal$hidden}),
					$elm$core$Platform$Cmd$none) : _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'ChangeCardDisplayType':
				var display = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{cardDisplay: display}),
					$elm$core$Platform$Cmd$none);
			case 'ChangeInventoryDisplayType':
				var showReturnHint = msg.a;
				var display = msg.b;
				var visibility = showReturnHint ? $rundis$elm_bootstrap$Bootstrap$Alert$shown : $rundis$elm_bootstrap$Bootstrap$Alert$closed;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{inventoryDisplay: display, returnViewHintVisibility: visibility, summarizeViewHintVisibility: $rundis$elm_bootstrap$Bootstrap$Alert$closed}),
					$elm$core$Platform$Cmd$none);
			case 'SelectCard':
				var id = msg.a;
				var card = A2(
					$elm_community$list_extra$List$Extra$find,
					function (c) {
						return _Utils_eq(c.id, id);
					},
					model.cardPool);
				if (card.$ === 'Just') {
					var c = card.a;
					var updatedModel = _Utils_update(
						model,
						{
							notSelectedCards: A2($elm_community$list_extra$List$Extra$remove, c, model.notSelectedCards),
							selectedCards: $elm$core$List$reverse(
								A2(
									$elm$core$List$cons,
									c,
									$elm$core$List$reverse(model.selectedCards)))
						});
					var navUrl = $elm$url$Url$toString(
						$author$project$Main$shareUrl(updatedModel));
					return _Utils_Tuple2(
						updatedModel,
						A2($elm$browser$Browser$Navigation$pushUrl, model.navKey, navUrl));
				} else {
					return A2(
						$elm$core$Debug$log,
						'A message was sent for a card that could not be found.',
						_Utils_Tuple2(model, $elm$core$Platform$Cmd$none));
				}
			case 'DeselectCard':
				var id = msg.a;
				var card = A2(
					$elm_community$list_extra$List$Extra$find,
					function (c) {
						return _Utils_eq(c.id, id);
					},
					model.selectedCards);
				if (card.$ === 'Just') {
					var c = card.a;
					var updatedModel = _Utils_update(
						model,
						{
							notSelectedCards: A2($elm$core$List$cons, c, model.notSelectedCards),
							selectedCards: A2(
								$elm$core$List$filter,
								function (cc) {
									return !_Utils_eq(cc.id, id);
								},
								model.selectedCards)
						});
					var navUrl = $elm$url$Url$toString(
						$author$project$Main$shareUrl(updatedModel));
					return _Utils_Tuple2(
						updatedModel,
						A2($elm$browser$Browser$Navigation$pushUrl, model.navKey, navUrl));
				} else {
					return A2(
						$elm$core$Debug$log,
						'A message was sent for a card that could not be found.',
						_Utils_Tuple2(model, $elm$core$Platform$Cmd$none));
				}
			case 'MoveCardDown':
				var id = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							selectedCards: A3(
								$author$project$Main$swapCardsBy,
								function (c) {
									return _Utils_eq(c.id, id);
								},
								1,
								model.selectedCards)
						}),
					$elm$core$Platform$Cmd$none);
			case 'MoveCardUp':
				var id = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							selectedCards: A3(
								$author$project$Main$swapCardsBy,
								function (c) {
									return _Utils_eq(c.id, id);
								},
								-1,
								model.selectedCards)
						}),
					$elm$core$Platform$Cmd$none);
			case 'ResetCards':
				var updatedModel = _Utils_update(
					model,
					{notSelectedCards: $author$project$Cards$cards, selectedCards: _List_Nil});
				var url = $elm$url$Url$toString(
					$author$project$Main$shareUrl(updatedModel));
				return _Utils_Tuple2(
					updatedModel,
					A2($elm$browser$Browser$Navigation$pushUrl, model.navKey, url));
			case 'FilterChanged':
				var value = msg.a;
				return $elm$core$String$isEmpty(value) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{filter: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none) : _Utils_Tuple2(
					_Utils_update(
						model,
						{
							filter: $elm$core$Maybe$Just(value)
						}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{filter: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$html$Html$div = _VirtualDom_node('div');
var $rundis$elm_bootstrap$Bootstrap$Grid$containerFluid = F2(
	function (attributes, children) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('container-fluid')
					]),
				attributes),
			children);
	});
var $author$project$Main$ToggleCardDetails = {$: 'ToggleCardDetails'};
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$ButtonGroup$Attrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAttrs = function (a) {
	return {$: 'ColAttrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAttrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$RowAttrs = function (a) {
	return {$: 'RowAttrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$RowAttrs(attrs_);
};
var $author$project$Main$ChangeCardDisplayType = function (a) {
	return {$: 'ChangeCardDisplayType', a: a};
};
var $lattyware$elm_fontawesome$FontAwesome$Icon$Icon = F5(
	function (prefix, name, width, height, paths) {
		return {height: height, name: name, paths: paths, prefix: prefix, width: width};
	});
var $lattyware$elm_fontawesome$FontAwesome$Solid$alignLeft = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'align-left',
	448,
	512,
	_List_fromArray(
		['M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z']));
var $lattyware$elm_fontawesome$FontAwesome$Solid$image = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'image',
	512,
	512,
	_List_fromArray(
		['M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z']));
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml3 = $elm$html$Html$Attributes$class('ml-3');
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs(attrs_);
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $rundis$elm_bootstrap$Bootstrap$Button$onClick = function (message) {
	return $rundis$elm_bootstrap$Bootstrap$Button$attrs(
		_List_fromArray(
			[
				A2(
				$elm$html$Html$Events$preventDefaultOn,
				'click',
				$elm$json$Json$Decode$succeed(
					_Utils_Tuple2(message, true)))
			]));
};
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$RadioButtonItem = function (a) {
	return {$: 'RadioButtonItem', a: a};
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$html$Html$Attributes$autocomplete = function (bool) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'Size':
				var size = modifier.a;
				return _Utils_update(
					options,
					{
						size: $elm$core$Maybe$Just(size)
					});
			case 'Coloring':
				var coloring = modifier.a;
				return _Utils_update(
					options,
					{
						coloring: $elm$core$Maybe$Just(coloring)
					});
			case 'Block':
				return _Utils_update(
					options,
					{block: true});
			case 'Disabled':
				var val = modifier.a;
				return _Utils_update(
					options,
					{disabled: val});
			default:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
		}
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions = {attributes: _List_Nil, block: false, coloring: $elm$core$Maybe$Nothing, disabled: false, size: $elm$core$Maybe$Nothing};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass = function (role) {
	switch (role.$) {
		case 'Primary':
			return 'primary';
		case 'Secondary':
			return 'secondary';
		case 'Success':
			return 'success';
		case 'Info':
			return 'info';
		case 'Warning':
			return 'warning';
		case 'Danger':
			return 'danger';
		case 'Dark':
			return 'dark';
		case 'Light':
			return 'light';
		default:
			return 'link';
	}
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption = function (size) {
	switch (size.$) {
		case 'XS':
			return $elm$core$Maybe$Nothing;
		case 'SM':
			return $elm$core$Maybe$Just('sm');
		case 'MD':
			return $elm$core$Maybe$Just('md');
		case 'LG':
			return $elm$core$Maybe$Just('lg');
		default:
			return $elm$core$Maybe$Just('xl');
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier, $rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('btn', true),
						_Utils_Tuple2('btn-block', options.block),
						_Utils_Tuple2('disabled', options.disabled)
					])),
				$elm$html$Html$Attributes$disabled(options.disabled)
			]),
		_Utils_ap(
			function () {
				var _v0 = A2($elm$core$Maybe$andThen, $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption, options.size);
				if (_v0.$ === 'Just') {
					var s = _v0.a;
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$class('btn-' + s)
						]);
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.coloring;
					if (_v1.$ === 'Just') {
						if (_v1.a.$ === 'Roled') {
							var role = _v1.a.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'btn-' + $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						} else {
							var role = _v1.a.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'btn-outline-' + $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						}
					} else {
						return _List_Nil;
					}
				}(),
				options.attributes)));
};
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $rundis$elm_bootstrap$Bootstrap$Button$radioButton = F3(
	function (checked, options, children) {
		var hideRadio = A2($elm$html$Html$Attributes$attribute, 'data-toggle', 'button');
		return A2(
			$elm$html$Html$label,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('active', checked)
						])),
				A2(
					$elm$core$List$cons,
					hideRadio,
					$rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes(options))),
			A2(
				$elm$core$List$cons,
				A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('radio'),
							$elm$html$Html$Attributes$checked(checked),
							$elm$html$Html$Attributes$autocomplete(false)
						]),
					_List_Nil),
				children));
	});
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButton = F3(
	function (checked, options, children) {
		return $rundis$elm_bootstrap$Bootstrap$ButtonGroup$RadioButtonItem(
			A3($rundis$elm_bootstrap$Bootstrap$Button$radioButton, checked, options, children));
	});
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$GroupItem = function (a) {
	return {$: 'GroupItem', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'Size':
				var size = modifier.a;
				return _Utils_update(
					options,
					{
						size: $elm$core$Maybe$Just(size)
					});
			case 'Vertical':
				return _Utils_update(
					options,
					{vertical: true});
			default:
				var attrs_ = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$defaultOptions = {attributes: _List_Nil, size: $elm$core$Maybe$Nothing, vertical: false};
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$groupAttributes = F2(
	function (toggle, modifiers) {
		var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$ButtonGroup$applyModifier, $rundis$elm_bootstrap$Bootstrap$ButtonGroup$defaultOptions, modifiers);
		return _Utils_ap(
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$attribute, 'role', 'group'),
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('btn-group', true),
							_Utils_Tuple2('btn-group-toggle', toggle),
							_Utils_Tuple2('btn-group-vertical', options.vertical)
						])),
					A2($elm$html$Html$Attributes$attribute, 'data-toggle', 'buttons')
				]),
			_Utils_ap(
				function () {
					var _v0 = A2($elm$core$Maybe$andThen, $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption, options.size);
					if (_v0.$ === 'Just') {
						var s = _v0.a;
						return _List_fromArray(
							[
								$elm$html$Html$Attributes$class('btn-group-' + s)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				options.attributes));
	});
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButtonGroupItem = F2(
	function (options, items) {
		return $rundis$elm_bootstrap$Bootstrap$ButtonGroup$GroupItem(
			A2(
				$elm$html$Html$div,
				A2($rundis$elm_bootstrap$Bootstrap$ButtonGroup$groupAttributes, true, options),
				A2(
					$elm$core$List$map,
					function (_v0) {
						var elem = _v0.a;
						return elem;
					},
					items)));
	});
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$renderGroup = function (_v0) {
	var elem = _v0.a;
	return elem;
};
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButtonGroup = F2(
	function (options, items) {
		return $rundis$elm_bootstrap$Bootstrap$ButtonGroup$renderGroup(
			A2($rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButtonGroupItem, options, items));
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring = function (a) {
	return {$: 'Coloring', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled = function (a) {
	return {$: 'Roled', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Secondary = {$: 'Secondary'};
var $rundis$elm_bootstrap$Bootstrap$Button$secondary = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled($rundis$elm_bootstrap$Bootstrap$Internal$Button$Secondary));
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $lattyware$elm_fontawesome$FontAwesome$Icon$Presentation = function (a) {
	return {$: 'Presentation', a: a};
};
var $lattyware$elm_fontawesome$FontAwesome$Icon$present = function (icon) {
	return $lattyware$elm_fontawesome$FontAwesome$Icon$Presentation(
		{attributes: _List_Nil, icon: icon, id: $elm$core$Maybe$Nothing, outer: $elm$core$Maybe$Nothing, role: 'img', title: $elm$core$Maybe$Nothing, transforms: _List_Nil});
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$svg$Svg$Attributes$class = _VirtualDom_attribute('class');
var $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$add = F2(
	function (transform, combined) {
		switch (transform.$) {
			case 'Scale':
				var direction = transform.a;
				var amount = function () {
					if (direction.$ === 'Grow') {
						var by = direction.a;
						return by;
					} else {
						var by = direction.a;
						return -by;
					}
				}();
				return _Utils_update(
					combined,
					{size: combined.size + amount});
			case 'Reposition':
				var direction = transform.a;
				var _v2 = function () {
					switch (direction.$) {
						case 'Up':
							var by = direction.a;
							return _Utils_Tuple2(0, -by);
						case 'Down':
							var by = direction.a;
							return _Utils_Tuple2(0, by);
						case 'Left':
							var by = direction.a;
							return _Utils_Tuple2(-by, 0);
						default:
							var by = direction.a;
							return _Utils_Tuple2(by, 0);
					}
				}();
				var x = _v2.a;
				var y = _v2.b;
				return _Utils_update(
					combined,
					{x: combined.x + x, y: combined.y + y});
			case 'Rotate':
				var rotation = transform.a;
				return _Utils_update(
					combined,
					{rotate: combined.rotate + rotation});
			default:
				if (transform.a.$ === 'Vertical') {
					var _v4 = transform.a;
					return _Utils_update(
						combined,
						{flipX: true});
				} else {
					var _v5 = transform.a;
					return _Utils_update(
						combined,
						{flipY: true});
				}
		}
	});
var $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$baseSize = 16;
var $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$meaninglessTransform = {flipX: false, flipY: false, rotate: 0, size: $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$baseSize, x: 0, y: 0};
var $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$combine = function (transforms) {
	return A3($elm$core$List$foldl, $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$add, $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$meaninglessTransform, transforms);
};
var $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$meaningfulTransform = function (transforms) {
	var combined = $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$combine(transforms);
	return _Utils_eq(combined, $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$meaninglessTransform) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(combined);
};
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$title = $elm$svg$Svg$trustedNode('title');
var $lattyware$elm_fontawesome$FontAwesome$Icon$titledContents = F3(
	function (titleId, contents, title) {
		return A2(
			$elm$core$List$cons,
			A2(
				$elm$svg$Svg$title,
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$id(titleId)
					]),
				_List_fromArray(
					[
						$elm$svg$Svg$text(title)
					])),
			contents);
	});
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$transformForSvg = F3(
	function (containerWidth, iconWidth, transform) {
		var path = 'translate(' + ($elm$core$String$fromFloat((iconWidth / 2) * (-1)) + ' -256)');
		var outer = 'translate(' + ($elm$core$String$fromFloat(containerWidth / 2) + ' 256)');
		var innerTranslate = 'translate(' + ($elm$core$String$fromFloat(transform.x * 32) + (',' + ($elm$core$String$fromFloat(transform.y * 32) + ') ')));
		var innerRotate = 'rotate(' + ($elm$core$String$fromFloat(transform.rotate) + ' 0 0)');
		var flipY = transform.flipY ? (-1) : 1;
		var scaleY = (transform.size / $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$baseSize) * flipY;
		var flipX = transform.flipX ? (-1) : 1;
		var scaleX = (transform.size / $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$baseSize) * flipX;
		var innerScale = 'scale(' + ($elm$core$String$fromFloat(scaleX) + (', ' + ($elm$core$String$fromFloat(scaleY) + ') ')));
		return {
			inner: $elm$svg$Svg$Attributes$transform(
				_Utils_ap(
					innerTranslate,
					_Utils_ap(innerScale, innerRotate))),
			outer: $elm$svg$Svg$Attributes$transform(outer),
			path: $elm$svg$Svg$Attributes$transform(path)
		};
	});
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $lattyware$elm_fontawesome$FontAwesome$Icon$allSpace = _List_fromArray(
	[
		$elm$svg$Svg$Attributes$x('0'),
		$elm$svg$Svg$Attributes$y('0'),
		$elm$svg$Svg$Attributes$width('100%'),
		$elm$svg$Svg$Attributes$height('100%')
	]);
var $elm$svg$Svg$clipPath = $elm$svg$Svg$trustedNode('clipPath');
var $elm$svg$Svg$Attributes$clipPath = _VirtualDom_attribute('clip-path');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePath = F2(
	function (attrs, d) {
		return A2(
			$elm$svg$Svg$path,
			A2(
				$elm$core$List$cons,
				$elm$svg$Svg$Attributes$fill('currentColor'),
				A2(
					$elm$core$List$cons,
					$elm$svg$Svg$Attributes$d(d),
					attrs)),
			_List_Nil);
	});
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePaths = F2(
	function (attrs, icon) {
		var _v0 = icon.paths;
		if (!_v0.b) {
			return A2($lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePath, attrs, '');
		} else {
			if (!_v0.b.b) {
				var only = _v0.a;
				return A2($lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePath, attrs, only);
			} else {
				var secondary = _v0.a;
				var _v1 = _v0.b;
				var primary = _v1.a;
				return A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$class('fa-group')
						]),
					_List_fromArray(
						[
							A2(
							$lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePath,
							A2(
								$elm$core$List$cons,
								$elm$svg$Svg$Attributes$class('fa-secondary'),
								attrs),
							secondary),
							A2(
							$lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePath,
							A2(
								$elm$core$List$cons,
								$elm$svg$Svg$Attributes$class('fa-primary'),
								attrs),
							primary)
						]));
			}
		}
	});
var $elm$svg$Svg$defs = $elm$svg$Svg$trustedNode('defs');
var $elm$svg$Svg$mask = $elm$svg$Svg$trustedNode('mask');
var $elm$svg$Svg$Attributes$mask = _VirtualDom_attribute('mask');
var $elm$svg$Svg$Attributes$maskContentUnits = _VirtualDom_attribute('maskContentUnits');
var $elm$svg$Svg$Attributes$maskUnits = _VirtualDom_attribute('maskUnits');
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $lattyware$elm_fontawesome$FontAwesome$Icon$viewMaskedWithTransform = F4(
	function (id, transforms, inner, outer) {
		var maskInnerGroup = A2(
			$elm$svg$Svg$g,
			_List_fromArray(
				[transforms.inner]),
			_List_fromArray(
				[
					A2(
					$lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePaths,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$fill('black'),
							transforms.path
						]),
					inner)
				]));
		var maskId = 'mask-' + (inner.name + ('-' + id));
		var maskTag = A2(
			$elm$svg$Svg$mask,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$id(maskId),
						$elm$svg$Svg$Attributes$maskUnits('userSpaceOnUse'),
						$elm$svg$Svg$Attributes$maskContentUnits('userSpaceOnUse')
					]),
				$lattyware$elm_fontawesome$FontAwesome$Icon$allSpace),
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$rect,
					A2(
						$elm$core$List$cons,
						$elm$svg$Svg$Attributes$fill('white'),
						$lattyware$elm_fontawesome$FontAwesome$Icon$allSpace),
					_List_Nil),
					A2(
					$elm$svg$Svg$g,
					_List_fromArray(
						[transforms.outer]),
					_List_fromArray(
						[maskInnerGroup]))
				]));
		var clipId = 'clip-' + (outer.name + ('-' + id));
		var defs = A2(
			$elm$svg$Svg$defs,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$clipPath,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id(clipId)
						]),
					_List_fromArray(
						[
							A2($lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePaths, _List_Nil, outer)
						])),
					maskTag
				]));
		return _List_fromArray(
			[
				defs,
				A2(
				$elm$svg$Svg$rect,
				$elm$core$List$concat(
					_List_fromArray(
						[
							_List_fromArray(
							[
								$elm$svg$Svg$Attributes$fill('currentColor'),
								$elm$svg$Svg$Attributes$clipPath('url(#' + (clipId + ')')),
								$elm$svg$Svg$Attributes$mask('url(#' + (maskId + ')'))
							]),
							$lattyware$elm_fontawesome$FontAwesome$Icon$allSpace
						])),
				_List_Nil)
			]);
	});
var $lattyware$elm_fontawesome$FontAwesome$Icon$viewWithTransform = F2(
	function (transforms, icon) {
		if (transforms.$ === 'Just') {
			var ts = transforms.a;
			return A2(
				$elm$svg$Svg$g,
				_List_fromArray(
					[ts.outer]),
				_List_fromArray(
					[
						A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[ts.inner]),
						_List_fromArray(
							[
								A2(
								$lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePaths,
								_List_fromArray(
									[ts.path]),
								icon)
							]))
					]));
		} else {
			return A2($lattyware$elm_fontawesome$FontAwesome$Svg$Internal$corePaths, _List_Nil, icon);
		}
	});
var $lattyware$elm_fontawesome$FontAwesome$Icon$internalView = function (_v0) {
	var icon = _v0.a.icon;
	var attributes = _v0.a.attributes;
	var transforms = _v0.a.transforms;
	var role = _v0.a.role;
	var id = _v0.a.id;
	var title = _v0.a.title;
	var outer = _v0.a.outer;
	var alwaysId = A2($elm$core$Maybe$withDefault, icon.name, id);
	var titleId = alwaysId + '-title';
	var semantics = A2(
		$elm$core$Maybe$withDefault,
		A2($elm$html$Html$Attributes$attribute, 'aria-hidden', 'true'),
		A2(
			$elm$core$Maybe$map,
			$elm$core$Basics$always(
				A2($elm$html$Html$Attributes$attribute, 'aria-labelledby', titleId)),
			title));
	var _v1 = A2(
		$elm$core$Maybe$withDefault,
		_Utils_Tuple2(icon.width, icon.height),
		A2(
			$elm$core$Maybe$map,
			function (o) {
				return _Utils_Tuple2(o.width, o.height);
			},
			outer));
	var width = _v1.a;
	var height = _v1.b;
	var classes = _List_fromArray(
		[
			'svg-inline--fa',
			'fa-' + icon.name,
			'fa-w-' + $elm$core$String$fromInt(
			$elm$core$Basics$ceiling((width / height) * 16))
		]);
	var svgTransform = A2(
		$elm$core$Maybe$map,
		A2($lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$transformForSvg, width, icon.width),
		$lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$meaningfulTransform(transforms));
	var contents = function () {
		var resolvedSvgTransform = A2(
			$elm$core$Maybe$withDefault,
			A3($lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$transformForSvg, width, icon.width, $lattyware$elm_fontawesome$FontAwesome$Transforms$Internal$meaninglessTransform),
			svgTransform);
		return A2(
			$elm$core$Maybe$withDefault,
			_List_fromArray(
				[
					A2($lattyware$elm_fontawesome$FontAwesome$Icon$viewWithTransform, svgTransform, icon)
				]),
			A2(
				$elm$core$Maybe$map,
				A3($lattyware$elm_fontawesome$FontAwesome$Icon$viewMaskedWithTransform, alwaysId, resolvedSvgTransform, icon),
				outer));
	}();
	var potentiallyTitledContents = A2(
		$elm$core$Maybe$withDefault,
		contents,
		A2(
			$elm$core$Maybe$map,
			A2($lattyware$elm_fontawesome$FontAwesome$Icon$titledContents, titleId, contents),
			title));
	return A2(
		$elm$svg$Svg$svg,
		$elm$core$List$concat(
			_List_fromArray(
				[
					_List_fromArray(
					[
						A2($elm$html$Html$Attributes$attribute, 'role', role),
						A2($elm$html$Html$Attributes$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
						$elm$svg$Svg$Attributes$viewBox(
						'0 0 ' + ($elm$core$String$fromInt(width) + (' ' + $elm$core$String$fromInt(height)))),
						semantics
					]),
					A2($elm$core$List$map, $elm$svg$Svg$Attributes$class, classes),
					attributes
				])),
		potentiallyTitledContents);
};
var $lattyware$elm_fontawesome$FontAwesome$Icon$view = function (presentation) {
	return $lattyware$elm_fontawesome$FontAwesome$Icon$internalView(presentation);
};
var $lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon = A2($elm$core$Basics$composeR, $lattyware$elm_fontawesome$FontAwesome$Icon$present, $lattyware$elm_fontawesome$FontAwesome$Icon$view);
var $author$project$Main$cardDisplayToggle = function (cardDisplay) {
	return A2(
		$rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButtonGroup,
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$ButtonGroup$attrs(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('d-flex align-items-center'),
						$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml3
					]))
			]),
		_List_fromArray(
			[
				A3(
				$rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButton,
				_Utils_eq(cardDisplay, $author$project$Main$Text),
				_List_fromArray(
					[
						$rundis$elm_bootstrap$Bootstrap$Button$secondary,
						$rundis$elm_bootstrap$Bootstrap$Button$onClick(
						$author$project$Main$ChangeCardDisplayType($author$project$Main$Text))
					]),
				_List_fromArray(
					[
						$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$alignLeft)
					])),
				A3(
				$rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButton,
				_Utils_eq(cardDisplay, $author$project$Main$Image),
				_List_fromArray(
					[
						$rundis$elm_bootstrap$Bootstrap$Button$secondary,
						$rundis$elm_bootstrap$Bootstrap$Button$onClick(
						$author$project$Main$ChangeCardDisplayType($author$project$Main$Image))
					]),
				_List_fromArray(
					[
						$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$image)
					]))
			]));
};
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$CheckboxButtonItem = function (a) {
	return {$: 'CheckboxButtonItem', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$checkboxButton = F3(
	function (checked, options, children) {
		return A2(
			$elm$html$Html$label,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('active', checked)
						])),
				$rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes(options)),
			A2(
				$elm$core$List$cons,
				A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('checkbox'),
							$elm$html$Html$Attributes$checked(checked),
							$elm$html$Html$Attributes$autocomplete(false)
						]),
					_List_Nil),
				children));
	});
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$checkboxButton = F3(
	function (checked, options, children) {
		return $rundis$elm_bootstrap$Bootstrap$ButtonGroup$CheckboxButtonItem(
			A3($rundis$elm_bootstrap$Bootstrap$Button$checkboxButton, checked, options, children));
	});
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$checkboxButtonGroupItem = F2(
	function (options, items) {
		return $rundis$elm_bootstrap$Bootstrap$ButtonGroup$GroupItem(
			A2(
				$elm$html$Html$div,
				A2($rundis$elm_bootstrap$Bootstrap$ButtonGroup$groupAttributes, true, options),
				A2(
					$elm$core$List$map,
					function (_v0) {
						var elem = _v0.a;
						return elem;
					},
					items)));
	});
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$checkboxButtonGroup = F2(
	function (options, items) {
		return $rundis$elm_bootstrap$Bootstrap$ButtonGroup$renderGroup(
			A2($rundis$elm_bootstrap$Bootstrap$ButtonGroup$checkboxButtonGroupItem, options, items));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Column = function (a) {
	return {$: 'Column', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$col = F2(
	function (options, children) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Column(
			{children: children, options: options});
	});
var $author$project$Main$ClearFilter = {$: 'ClearFilter'};
var $author$project$Main$FilterChanged = function (a) {
	return {$: 'FilterChanged', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Form$Input$Attrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$Addon = function (a) {
	return {$: 'Addon', a: a};
};
var $elm$html$Html$button = _VirtualDom_node('button');
var $rundis$elm_bootstrap$Bootstrap$Button$button = F2(
	function (options, children) {
		return A2(
			$elm$html$Html$button,
			$rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes(options),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$button = F2(
	function (options, children) {
		return $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$Addon(
			A2($rundis$elm_bootstrap$Bootstrap$Button$button, options, children));
	});
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$Config = function (a) {
	return {$: 'Config', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$config = function (input_) {
	return $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$Config(
		{attributes: _List_Nil, input: input_, predecessors: _List_Nil, size: $elm$core$Maybe$Nothing, successors: _List_Nil});
};
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$successors = F2(
	function (addons, _v0) {
		var conf = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$Config(
			_Utils_update(
				conf,
				{successors: addons}));
	});
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$Input = function (a) {
	return {$: 'Input', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$input = F2(
	function (inputFn, options) {
		return $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$Input(
			inputFn(options));
	});
var $rundis$elm_bootstrap$Bootstrap$Form$Input$Text = {$: 'Text'};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$Input = function (a) {
	return {$: 'Input', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$Type = function (a) {
	return {$: 'Type', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$create = F2(
	function (tipe, options) {
		return $rundis$elm_bootstrap$Bootstrap$Form$Input$Input(
			{
				options: A2(
					$elm$core$List$cons,
					$rundis$elm_bootstrap$Bootstrap$Form$Input$Type(tipe),
					options)
			});
	});
var $rundis$elm_bootstrap$Bootstrap$Form$Input$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'Size':
				var size_ = modifier.a;
				return _Utils_update(
					options,
					{
						size: $elm$core$Maybe$Just(size_)
					});
			case 'Id':
				var id_ = modifier.a;
				return _Utils_update(
					options,
					{
						id: $elm$core$Maybe$Just(id_)
					});
			case 'Type':
				var tipe = modifier.a;
				return _Utils_update(
					options,
					{tipe: tipe});
			case 'Disabled':
				var val = modifier.a;
				return _Utils_update(
					options,
					{disabled: val});
			case 'Value':
				var value_ = modifier.a;
				return _Utils_update(
					options,
					{
						value: $elm$core$Maybe$Just(value_)
					});
			case 'Placeholder':
				var value_ = modifier.a;
				return _Utils_update(
					options,
					{
						placeholder: $elm$core$Maybe$Just(value_)
					});
			case 'OnInput':
				var onInput_ = modifier.a;
				return _Utils_update(
					options,
					{
						onInput: $elm$core$Maybe$Just(onInput_)
					});
			case 'Validation':
				var validation_ = modifier.a;
				return _Utils_update(
					options,
					{
						validation: $elm$core$Maybe$Just(validation_)
					});
			case 'Readonly':
				var val = modifier.a;
				return _Utils_update(
					options,
					{readonly: val});
			case 'PlainText':
				var val = modifier.a;
				return _Utils_update(
					options,
					{plainText: val});
			default:
				var attrs_ = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Form$Input$defaultOptions = {attributes: _List_Nil, disabled: false, id: $elm$core$Maybe$Nothing, onInput: $elm$core$Maybe$Nothing, placeholder: $elm$core$Maybe$Nothing, plainText: false, readonly: false, size: $elm$core$Maybe$Nothing, tipe: $rundis$elm_bootstrap$Bootstrap$Form$Input$Text, validation: $elm$core$Maybe$Nothing, value: $elm$core$Maybe$Nothing};
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$html$Html$Attributes$readonly = $elm$html$Html$Attributes$boolProperty('readOnly');
var $rundis$elm_bootstrap$Bootstrap$Form$Input$sizeAttribute = function (size) {
	return A2(
		$elm$core$Maybe$map,
		function (s) {
			return $elm$html$Html$Attributes$class('form-control-' + s);
		},
		$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(size));
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$typeAttribute = function (inputType) {
	return $elm$html$Html$Attributes$type_(
		function () {
			switch (inputType.$) {
				case 'Text':
					return 'text';
				case 'Password':
					return 'password';
				case 'DatetimeLocal':
					return 'datetime-local';
				case 'Date':
					return 'date';
				case 'Month':
					return 'month';
				case 'Time':
					return 'time';
				case 'Week':
					return 'week';
				case 'Number':
					return 'number';
				case 'Email':
					return 'email';
				case 'Url':
					return 'url';
				case 'Search':
					return 'search';
				case 'Tel':
					return 'tel';
				default:
					return 'color';
			}
		}());
};
var $rundis$elm_bootstrap$Bootstrap$Form$FormInternal$validationToString = function (validation) {
	if (validation.$ === 'Success') {
		return 'is-valid';
	} else {
		return 'is-invalid';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$validationAttribute = function (validation) {
	return $elm$html$Html$Attributes$class(
		$rundis$elm_bootstrap$Bootstrap$Form$FormInternal$validationToString(validation));
};
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $rundis$elm_bootstrap$Bootstrap$Form$Input$toAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Form$Input$applyModifier, $rundis$elm_bootstrap$Bootstrap$Form$Input$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class(
				options.plainText ? 'form-control-plaintext' : 'form-control'),
				$elm$html$Html$Attributes$disabled(options.disabled),
				$elm$html$Html$Attributes$readonly(options.readonly || options.plainText),
				$rundis$elm_bootstrap$Bootstrap$Form$Input$typeAttribute(options.tipe)
			]),
		_Utils_ap(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2($elm$core$Maybe$map, $elm$html$Html$Attributes$id, options.id),
						A2($elm$core$Maybe$andThen, $rundis$elm_bootstrap$Bootstrap$Form$Input$sizeAttribute, options.size),
						A2($elm$core$Maybe$map, $elm$html$Html$Attributes$value, options.value),
						A2($elm$core$Maybe$map, $elm$html$Html$Attributes$placeholder, options.placeholder),
						A2($elm$core$Maybe$map, $elm$html$Html$Events$onInput, options.onInput),
						A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Form$Input$validationAttribute, options.validation)
					])),
			options.attributes));
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$view = function (_v0) {
	var options = _v0.a.options;
	return A2(
		$elm$html$Html$input,
		$rundis$elm_bootstrap$Bootstrap$Form$Input$toAttributes(options),
		_List_Nil);
};
var $rundis$elm_bootstrap$Bootstrap$Form$Input$input = F2(
	function (tipe, options) {
		return $rundis$elm_bootstrap$Bootstrap$Form$Input$view(
			A2($rundis$elm_bootstrap$Bootstrap$Form$Input$create, tipe, options));
	});
var $rundis$elm_bootstrap$Bootstrap$Form$Input$text = $rundis$elm_bootstrap$Bootstrap$Form$Input$input($rundis$elm_bootstrap$Bootstrap$Form$Input$Text);
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$text = $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$input($rundis$elm_bootstrap$Bootstrap$Form$Input$text);
var $lattyware$elm_fontawesome$FontAwesome$Solid$times = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'times',
	352,
	512,
	_List_fromArray(
		['M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z']));
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$sizeAttribute = function (size) {
	return A2(
		$elm$core$Maybe$map,
		function (s) {
			return $elm$html$Html$Attributes$class('input-group-' + s);
		},
		$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(size));
};
var $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$view = function (_v0) {
	var conf = _v0.a;
	var _v1 = conf.input;
	var input_ = _v1.a;
	return A2(
		$elm$html$Html$div,
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('input-group')
				]),
			_Utils_ap(
				A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					_List_fromArray(
						[
							A2($elm$core$Maybe$andThen, $rundis$elm_bootstrap$Bootstrap$Form$InputGroup$sizeAttribute, conf.size)
						])),
				conf.attributes)),
		_Utils_ap(
			A2(
				$elm$core$List$map,
				function (_v2) {
					var e = _v2.a;
					return A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('input-group-prepend')
							]),
						_List_fromArray(
							[e]));
				},
				conf.predecessors),
			_Utils_ap(
				_List_fromArray(
					[input_]),
				A2(
					$elm$core$List$map,
					function (_v3) {
						var e = _v3.a;
						return A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('input-group-append')
								]),
							_List_fromArray(
								[e]));
					},
					conf.successors))));
};
var $author$project$Main$filterWithClearButton = function (currentFilter) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('w-100')
			]),
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$view(
				A2(
					$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$successors,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$button,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Button$secondary,
									$rundis$elm_bootstrap$Bootstrap$Button$attrs(
									_List_fromArray(
										[
											$elm$html$Html$Events$onClick($author$project$Main$ClearFilter)
										]))
								]),
							_List_fromArray(
								[
									$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$times)
								]))
						]),
					$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$config(
						$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$text(
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Form$Input$attrs(
									_List_fromArray(
										[
											$elm$html$Html$Attributes$placeholder('Filter'),
											$elm$html$Html$Events$onInput($author$project$Main$FilterChanged),
											$elm$html$Html$Attributes$value(currentFilter)
										]))
								])))))
			]));
};
var $author$project$Cards$containsWord = F2(
	function (word, card) {
		var descriptions = A2(
			$elm$core$List$map,
			function (p) {
				return $elm$core$String$toLower(p.description);
			},
			card.properties);
		var textAndProperties = A2(
			$elm$core$List$cons,
			$elm$core$String$toLower(card.title),
			descriptions);
		return A2(
			$elm$core$String$contains,
			word,
			A2($elm$core$String$join, ' ', textAndProperties));
	});
var $author$project$Cards$containsWords = F2(
	function (words, card) {
		var contains = function (w) {
			return A2($author$project$Cards$containsWord, w, card);
		};
		return A2($elm$core$List$all, contains, words);
	});
var $author$project$Main$filteredCards = F2(
	function (filter, cards) {
		if (filter.$ === 'Just') {
			var f = filter.a;
			var lowerCaseFilter = $elm$core$String$toLower(f);
			var parts = A2($elm$core$String$split, ' ', lowerCaseFilter);
			return A2(
				$elm$core$List$filter,
				$author$project$Cards$containsWords(parts),
				cards);
		} else {
			return cards;
		}
	});
var $author$project$Main$SelectCard = function (a) {
	return {$: 'SelectCard', a: a};
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$Attrs = function (a) {
	return {$: 'Attrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Internal$Attrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockAttrs = function (a) {
	return {$: 'BlockAttrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Block$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockAttrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Card$Config = function (a) {
	return {$: 'Config', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$CardBlock = function (a) {
	return {$: 'CardBlock', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyBlockModifier = F2(
	function (option, options) {
		switch (option.$) {
			case 'AlignedBlock':
				var align = option.a;
				return _Utils_update(
					options,
					{
						aligned: $elm$core$Maybe$Just(align)
					});
			case 'BlockColoring':
				var role = option.a;
				return _Utils_update(
					options,
					{
						coloring: $elm$core$Maybe$Just(role)
					});
			case 'BlockTextColoring':
				var color = option.a;
				return _Utils_update(
					options,
					{
						textColoring: $elm$core$Maybe$Just(color)
					});
			default:
				var attrs = option.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultBlockOptions = {aligned: $elm$core$Maybe$Nothing, attributes: _List_Nil, coloring: $elm$core$Maybe$Nothing, textColoring: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignDirOption = function (dir) {
	switch (dir.$) {
		case 'Center':
			return 'center';
		case 'Left':
			return 'left';
		default:
			return 'right';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass = function (_v0) {
	var dir = _v0.dir;
	var size = _v0.size;
	return $elm$html$Html$Attributes$class(
		'text' + (A2(
			$elm$core$Maybe$withDefault,
			'-',
			A2(
				$elm$core$Maybe$map,
				function (s) {
					return '-' + (s + '-');
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(size))) + $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignDirOption(dir)));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass = F2(
	function (prefix, role) {
		return $elm$html$Html$Attributes$class(
			prefix + ('-' + function () {
				switch (role.$) {
					case 'Primary':
						return 'primary';
					case 'Secondary':
						return 'secondary';
					case 'Success':
						return 'success';
					case 'Info':
						return 'info';
					case 'Warning':
						return 'warning';
					case 'Danger':
						return 'danger';
					case 'Light':
						return 'light';
					default:
						return 'dark';
				}
			}()));
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass = function (color) {
	if (color.$ === 'White') {
		return $elm$html$Html$Attributes$class('text-white');
	} else {
		var role = color.a;
		return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'text', role);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$blockAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyBlockModifier, $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultBlockOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card-body')
			]),
		_Utils_ap(
			function () {
				var _v0 = options.aligned;
				if (_v0.$ === 'Just') {
					var align = _v0.a;
					return _List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(align)
						]);
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.coloring;
					if (_v1.$ === 'Just') {
						var role = _v1.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v2 = options.textColoring;
						if (_v2.$ === 'Just') {
							var color = _v2.a;
							return _List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass(color)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.attributes))));
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$block = F2(
	function (options, items) {
		return $rundis$elm_bootstrap$Bootstrap$Card$Internal$CardBlock(
			A2(
				$elm$html$Html$div,
				$rundis$elm_bootstrap$Bootstrap$Card$Internal$blockAttributes(options),
				A2(
					$elm$core$List$map,
					function (_v0) {
						var e = _v0.a;
						return e;
					},
					items)));
	});
var $rundis$elm_bootstrap$Bootstrap$Card$block = F3(
	function (options, items, _v0) {
		var conf = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Card$Config(
			_Utils_update(
				conf,
				{
					blocks: _Utils_ap(
						conf.blocks,
						_List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Card$Internal$block, options, items)
							]))
				}));
	});
var $rundis$elm_bootstrap$Bootstrap$Card$config = function (options) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Config(
		{blocks: _List_Nil, footer: $elm$core$Maybe$Nothing, header: $elm$core$Maybe$Nothing, imgBottom: $elm$core$Maybe$Nothing, imgTop: $elm$core$Maybe$Nothing, options: options});
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockItem = function (a) {
	return {$: 'BlockItem', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Block$custom = function (element) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockItem(element);
};
var $rundis$elm_bootstrap$Bootstrap$Card$Footer = function (a) {
	return {$: 'Footer', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$footer = F3(
	function (attributes, children, _v0) {
		var conf = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Card$Config(
			_Utils_update(
				conf,
				{
					footer: $elm$core$Maybe$Just(
						$rundis$elm_bootstrap$Bootstrap$Card$Footer(
							A2(
								$elm$html$Html$div,
								A2(
									$elm$core$List$cons,
									$elm$html$Html$Attributes$class('card-footer'),
									attributes),
								children)))
				}));
	});
var $author$project$AchievementData$achievements = _List_fromArray(
	[
		{card: 'Ammo Scavenger', name: 'Ammo Scavenger', requirement: '500 Total Pistol Kills'},
		{card: 'Berserker', name: 'Berserker', requirement: '500 Total Melee Kills'},
		{card: 'Mag Carrier', name: 'Mag Carrier', requirement: '500 Total SMG Kills'},
		{card: 'Meatgrinder', name: 'Meat Grinder', requirement: '500 Total LMG Kills'},
		{card: 'Shell Carrier', name: 'Shell Carrier', requirement: '500 Total Shotgun Kills'},
		{card: 'Stock Pouch', name: 'Stock Pouch', requirement: '500 Total Sniper Kills'},
		{card: 'Tactical Vest', name: 'Tactical Vest', requirement: '500 Total A-Rifle Kills'},
		{card: 'Adrenaline Fueled', name: 'Brought a Knife to a Gunfight', requirement: '50 melee kills in single level'},
		{card: 'Confident Killer', name: 'Smorgasbord', requirement: 'Kill each non-boss Mutation'},
		{card: 'Lucky Pennies', name: 'Jukebox Hero', requirement: 'Defend Jukebox without it breaking'},
		{card: 'Field Surgeon', name: 'Field Surgeon', requirement: 'Heal 5,000 Total Health'}
	]);
var $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsCenter = $elm$html$Html$Attributes$class('align-items-center');
var $author$project$Cards$isAlleyLine = function (c) {
	var _v0 = c.supplyLine.name;
	if (_v0.$ === 'Alley') {
		return true;
	} else {
		return false;
	}
};
var $elm_community$list_extra$List$Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _v1) {
				var y = _v1.a;
				var fy = _v1.b;
				var fx = f(x);
				return (_Utils_cmp(fx, fy) > 0) ? _Utils_Tuple2(x, fx) : _Utils_Tuple2(y, fy);
			});
		if (ls.b) {
			if (!ls.b.b) {
				var l_ = ls.a;
				return $elm$core$Maybe$Just(l_);
			} else {
				var l_ = ls.a;
				var ls_ = ls.b;
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$List$foldl,
						maxBy,
						_Utils_Tuple2(
							l_,
							f(l_)),
						ls_).a);
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Cards$supplyLineCount = function (predicate) {
	var max = A2(
		$elm_community$list_extra$List$Extra$maximumBy,
		function (c) {
			return c.supplyLine.index;
		},
		A2($elm$core$List$filter, predicate, $author$project$Cards$cards));
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		A2(
			$elm$core$Maybe$map,
			function (m) {
				return m.supplyLine.index;
			},
			max));
};
var $author$project$Cards$alleySupplyLineCount = $author$project$Cards$supplyLineCount($author$project$Cards$isAlleyLine);
var $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block = $elm$html$Html$Attributes$class('d-flex');
var $author$project$Cards$isClinicLine = function (c) {
	var _v0 = c.supplyLine.name;
	if (_v0.$ === 'Clinic') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Cards$clinicSupplyLineCount = $author$project$Cards$supplyLineCount($author$project$Cards$isClinicLine);
var $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$col = $elm$html$Html$Attributes$class('flex-column');
var $elm$html$Html$i = _VirtualDom_node('i');
var $elm$html$Html$img = _VirtualDom_node('img');
var $author$project$Cards$isAccomplishmentLine = function (c) {
	var _v0 = c.supplyLine.name;
	if (_v0.$ === 'Accomplishment') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Cards$isRovingMerchantLine = function (c) {
	var _v0 = c.supplyLine.name;
	if (_v0.$ === 'RovingMerchants') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Cards$isStarterLine = function (c) {
	var _v0 = c.supplyLine.name;
	if (_v0.$ === 'Starter') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Cards$isStripLine = function (c) {
	var _v0 = c.supplyLine.name;
	if (_v0.$ === 'Strip') {
		return true;
	} else {
		return false;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$justifyBetween = $elm$html$Html$Attributes$class('justify-content-between');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb0Sm = $elm$html$Html$Attributes$class('mb-sm-0');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb2 = $elm$html$Html$Attributes$class('mb-2');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt3 = $elm$html$Html$Attributes$class('mt-3');
var $author$project$Cards$isNestLine = function (c) {
	var _v0 = c.supplyLine.name;
	if (_v0.$ === 'Nest') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Cards$nestSupplyLineCount = $author$project$Cards$supplyLineCount($author$project$Cards$isNestLine);
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $author$project$Cards$supplyTrackToString = function (track) {
	switch (track.$) {
		case 'Nest':
			return 'Nest';
		case 'Alley':
			return 'Alley';
		case 'Clinic':
			return 'Clinic';
		case 'Strip':
			return 'Strip';
		case 'Starter':
			return 'Starter';
		case 'Accomplishment':
			var a = track.a;
			return a;
		case 'RovingMerchants':
			return 'Roving Merchants';
		default:
			var a = track.a;
			var b = track.b;
			return 'Unknown - ' + (a + (' - ' + b));
	}
};
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$Main$fullCardViewDetailsBlock = function (card) {
	var totalCostText = 'Σ ' + $elm$core$String$fromInt(card.totalCost);
	var singleCostText = $elm$core$String$fromInt(card.cost);
	var numberOfCards = function () {
		var _v0 = card.supplyLine.name;
		switch (_v0.$) {
			case 'Nest':
				return $author$project$Cards$nestSupplyLineCount;
			case 'Alley':
				return $author$project$Cards$alleySupplyLineCount;
			case 'Clinic':
				return $author$project$Cards$clinicSupplyLineCount;
			default:
				return -1;
		}
	}();
	var costDiv = $author$project$Cards$isAccomplishmentLine(card) ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'font-size', '2em')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('🏆')
			])) : ($author$project$Cards$isRovingMerchantLine(card) ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'font-size', '2em')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('🏬')
			])) : ($author$project$Cards$isStripLine(card) ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'font-size', '2em')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('🎞')
			])) : ($author$project$Cards$isStarterLine(card) ? A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'font-size', '2em')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('🏲')
			])) : A2(
		$elm$html$Html$div,
		_List_fromArray(
			[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$col]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsCenter]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$img,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$src('img/cost.png'),
								A2($elm$html$Html$Attributes$style, 'width', '1em'),
								A2($elm$html$Html$Attributes$style, 'height', '1em')
							]),
						_List_Nil),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(singleCostText)
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(totalCostText)
					]))
			])))));
	var achievementRequirement = $author$project$Cards$isAccomplishmentLine(card) ? A2(
		$elm$core$Maybe$withDefault,
		'',
		A2(
			$elm$core$Maybe$map,
			function (a) {
				return a.requirement;
			},
			A2(
				$elm_community$list_extra$List$Extra$find,
				function (a) {
					return _Utils_eq(a.card, card.title);
				},
				$author$project$AchievementData$achievements))) : '';
	var nameDiv = A2(
		$elm$html$Html$div,
		_List_fromArray(
			[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$col]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('font-weight-semi-bold card-details-achievement-field')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						$author$project$Cards$supplyTrackToString(card.supplyLine.name))
					])),
				$author$project$Cards$isAccomplishmentLine(card) ? A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('card-details-achievement-field')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(achievementRequirement)
					])) : (($author$project$Cards$isStarterLine(card) || $author$project$Cards$isStripLine(card)) ? A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$i,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('always unlocked')
							]))
					])) : ($author$project$Cards$isRovingMerchantLine(card) ? A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$i,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('randomly available')
							]))
					])) : A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text(
						$elm$core$String$fromInt(card.supplyLine.index) + (' of ' + $elm$core$String$fromInt(numberOfCards)))
					]))))
			]));
	return $rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
		A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt3,
					$elm$html$Html$Attributes$class('card-details-block')
				]),
			_List_fromArray(
				[
					A3($elm$html$Html$node, 'hr', _List_Nil, _List_Nil),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$justifyBetween, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb2, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb0Sm]),
					_List_fromArray(
						[nameDiv, costDiv]))
				])));
};
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyModifier = F2(
	function (option, options) {
		switch (option.$) {
			case 'Aligned':
				var align = option.a;
				return _Utils_update(
					options,
					{
						aligned: $elm$core$Maybe$Just(align)
					});
			case 'Coloring':
				var coloring = option.a;
				return _Utils_update(
					options,
					{
						coloring: $elm$core$Maybe$Just(coloring)
					});
			case 'TextColoring':
				var coloring = option.a;
				return _Utils_update(
					options,
					{
						textColoring: $elm$core$Maybe$Just(coloring)
					});
			default:
				var attrs = option.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultOptions = {aligned: $elm$core$Maybe$Nothing, attributes: _List_Nil, coloring: $elm$core$Maybe$Nothing, textColoring: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$cardAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyModifier, $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card')
			]),
		_Utils_ap(
			function () {
				var _v0 = options.coloring;
				if (_v0.$ === 'Just') {
					if (_v0.a.$ === 'Roled') {
						var role = _v0.a.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role)
							]);
					} else {
						var role = _v0.a.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'border', role)
							]);
					}
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.textColoring;
					if (_v1.$ === 'Just') {
						var color = _v1.a;
						return _List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass(color)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v2 = options.aligned;
						if (_v2.$ === 'Just') {
							var align = _v2.a;
							return _List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(align)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.attributes))));
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$renderBlocks = function (blocks) {
	return A2(
		$elm$core$List$map,
		function (block_) {
			if (block_.$ === 'CardBlock') {
				var e = block_.a;
				return e;
			} else {
				var e = block_.a;
				return e;
			}
		},
		blocks);
};
var $rundis$elm_bootstrap$Bootstrap$Card$view = function (_v0) {
	var conf = _v0.a;
	return A2(
		$elm$html$Html$div,
		$rundis$elm_bootstrap$Bootstrap$Card$Internal$cardAttributes(conf.options),
		_Utils_ap(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (_v1) {
							var e = _v1.a;
							return e;
						},
						conf.header),
						A2(
						$elm$core$Maybe$map,
						function (_v2) {
							var e = _v2.a;
							return e;
						},
						conf.imgTop)
					])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Card$Internal$renderBlocks(conf.blocks),
				A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					_List_fromArray(
						[
							A2(
							$elm$core$Maybe$map,
							function (_v3) {
								var e = _v3.a;
								return e;
							},
							conf.footer),
							A2(
							$elm$core$Maybe$map,
							function (_v4) {
								var e = _v4.a;
								return e;
							},
							conf.imgBottom)
						])))));
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Size$w100 = $elm$html$Html$Attributes$class('w-100');
var $author$project$Main$fullCardViewWithImage = F2(
	function (showDetails, card) {
		var details = showDetails ? $author$project$Main$fullCardViewDetailsBlock(card) : $rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
			A2($elm$html$Html$div, _List_Nil, _List_Nil));
		var buttonBackground = $rundis$elm_bootstrap$Bootstrap$Button$secondary;
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_Nil,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$footer,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Button$button,
								_List_fromArray(
									[
										buttonBackground,
										$rundis$elm_bootstrap$Bootstrap$Button$attrs(
										_List_fromArray(
											[
												$rundis$elm_bootstrap$Bootstrap$Utilities$Size$w100,
												$elm$html$Html$Events$onClick(
												$author$project$Main$SelectCard(card.id))
											]))
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Select')
									]))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$block,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$Block$attrs(_List_Nil)
								]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
									A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('d-flex justify-content-center bg-black')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$a,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$href('#'),
														$elm$html$Html$Attributes$class('img-shadow')
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$img,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$src('img/english/' + card.filename),
																A2($elm$html$Html$Attributes$style, 'width', '248px'),
																A2($elm$html$Html$Attributes$style, 'height', '376px')
															]),
														_List_Nil)
													]))
											]))),
									details
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[
										$rundis$elm_bootstrap$Bootstrap$Card$attrs(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt3]))
									])))))
				]));
	});
var $elm$html$Html$h6 = _VirtualDom_node('h6');
var $rundis$elm_bootstrap$Bootstrap$Card$Header = function (a) {
	return {$: 'Header', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$headerPrivate = F4(
	function (elemFn, attributes, children, _v0) {
		var conf = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Card$Config(
			_Utils_update(
				conf,
				{
					header: $elm$core$Maybe$Just(
						$rundis$elm_bootstrap$Bootstrap$Card$Header(
							A2(
								elemFn,
								A2(
									$elm$core$List$cons,
									$elm$html$Html$Attributes$class('card-header'),
									attributes),
								children)))
				}));
	});
var $rundis$elm_bootstrap$Bootstrap$Card$header = $rundis$elm_bootstrap$Bootstrap$Card$headerPrivate($elm$html$Html$div);
var $elm$html$Html$li = _VirtualDom_node('li');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt2 = $elm$html$Html$Attributes$class('mt-2');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pl3 = $elm$html$Html$Attributes$class('pl-3');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pr0 = $elm$html$Html$Attributes$class('pr-0');
var $rundis$elm_bootstrap$Bootstrap$General$Internal$SM = {$: 'SM'};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Size = function (a) {
	return {$: 'Size', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$small = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Size($rundis$elm_bootstrap$Bootstrap$General$Internal$SM);
var $elm$html$Html$small = _VirtualDom_node('small');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $author$project$Main$fullCardViewWithText = F2(
	function (showDetails, card) {
		var details = showDetails ? $author$project$Main$fullCardViewDetailsBlock(card) : $rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
			A2($elm$html$Html$div, _List_Nil, _List_Nil));
		var buttonBackground = $rundis$elm_bootstrap$Bootstrap$Button$secondary;
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_Nil,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$footer,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt2]),
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Button$button,
								_List_fromArray(
									[
										buttonBackground,
										$rundis$elm_bootstrap$Bootstrap$Button$small,
										$rundis$elm_bootstrap$Bootstrap$Button$attrs(
										_List_fromArray(
											[
												$rundis$elm_bootstrap$Bootstrap$Utilities$Size$w100,
												$elm$html$Html$Events$onClick(
												$author$project$Main$SelectCard(card.id))
											]))
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Select')
									]))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$block,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$Block$attrs(
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('full-size-card-body')
										]))
								]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
									A2(
										$elm$html$Html$ul,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('text-card-list'),
												$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pl3,
												$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pr0
											]),
										A2(
											$elm$core$List$map,
											function (property) {
												return A2(
													$elm$html$Html$div,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$elm$html$Html$li,
															_List_Nil,
															_List_fromArray(
																[
																	A2(
																	$elm$html$Html$small,
																	_List_Nil,
																	_List_fromArray(
																		[
																			$elm$html$Html$text(property.description)
																		]))
																]))
														]));
											},
											card.properties))),
									details
								]),
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$header,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('text-center')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$h6,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('card-text-header mb-0')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(card.title)
											]))
									]),
								$rundis$elm_bootstrap$Bootstrap$Card$config(
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Card$attrs(
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('full-size-card-text'),
													$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt3
												]))
										]))))))
				]));
	});
var $author$project$Main$fullCardView = F3(
	function (showCardDetails, cardDisplay, card) {
		if (cardDisplay.$ === 'Image') {
			return A2($author$project$Main$fullCardViewWithImage, showCardDetails, card);
		} else {
			return A2($author$project$Main$fullCardViewWithText, showCardDetails, card);
		}
	});
var $lattyware$elm_fontawesome$FontAwesome$Solid$info = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'info',
	192,
	512,
	_List_fromArray(
		['M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z']));
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col8 = {$: 'Col8'};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$LG = {$: 'LG'};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColWidth = function (a) {
	return {$: 'ColWidth', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width = F2(
	function (screenSize, columnCount) {
		return {columnCount: columnCount, screenSize: screenSize};
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$width = F2(
	function (size, count) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColWidth(
			A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width, size, count));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$lg8 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, $rundis$elm_bootstrap$Bootstrap$General$Internal$LG, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col8);
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col6 = {$: 'Col6'};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$MD = {$: 'MD'};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$md6 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, $rundis$elm_bootstrap$Bootstrap$General$Internal$MD, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col6);
var $rundis$elm_bootstrap$Bootstrap$Utilities$Border$rounded = $elm$html$Html$Attributes$class('rounded');
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col = {$: 'Col'};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$XS = {$: 'XS'};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColAlign = F2(
	function (align_, options) {
		var _v0 = align_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						alignXs: $elm$core$Maybe$Just(align_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						alignSm: $elm$core$Maybe$Just(align_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						alignMd: $elm$core$Maybe$Just(align_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						alignLg: $elm$core$Maybe$Just(align_)
					});
			default:
				return _Utils_update(
					options,
					{
						alignXl: $elm$core$Maybe$Just(align_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOffset = F2(
	function (offset_, options) {
		var _v0 = offset_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						offsetXs: $elm$core$Maybe$Just(offset_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						offsetSm: $elm$core$Maybe$Just(offset_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						offsetMd: $elm$core$Maybe$Just(offset_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						offsetLg: $elm$core$Maybe$Just(offset_)
					});
			default:
				return _Utils_update(
					options,
					{
						offsetXl: $elm$core$Maybe$Just(offset_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOrder = F2(
	function (order_, options) {
		var _v0 = order_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						orderXs: $elm$core$Maybe$Just(order_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						orderSm: $elm$core$Maybe$Just(order_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						orderMd: $elm$core$Maybe$Just(order_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						orderLg: $elm$core$Maybe$Just(order_)
					});
			default:
				return _Utils_update(
					options,
					{
						orderXl: $elm$core$Maybe$Just(order_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPull = F2(
	function (pull_, options) {
		var _v0 = pull_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						pullXs: $elm$core$Maybe$Just(pull_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						pullSm: $elm$core$Maybe$Just(pull_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						pullMd: $elm$core$Maybe$Just(pull_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						pullLg: $elm$core$Maybe$Just(pull_)
					});
			default:
				return _Utils_update(
					options,
					{
						pullXl: $elm$core$Maybe$Just(pull_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPush = F2(
	function (push_, options) {
		var _v0 = push_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						pushXs: $elm$core$Maybe$Just(push_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						pushSm: $elm$core$Maybe$Just(push_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						pushMd: $elm$core$Maybe$Just(push_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						pushLg: $elm$core$Maybe$Just(push_)
					});
			default:
				return _Utils_update(
					options,
					{
						pushXl: $elm$core$Maybe$Just(push_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColWidth = F2(
	function (width_, options) {
		var _v0 = width_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						widthXs: $elm$core$Maybe$Just(width_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						widthSm: $elm$core$Maybe$Just(width_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						widthMd: $elm$core$Maybe$Just(width_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						widthLg: $elm$core$Maybe$Just(width_)
					});
			default:
				return _Utils_update(
					options,
					{
						widthXl: $elm$core$Maybe$Just(width_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOption = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'ColAttrs':
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
			case 'ColWidth':
				var width_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColWidth, width_, options);
			case 'ColOffset':
				var offset_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOffset, offset_, options);
			case 'ColPull':
				var pull_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPull, pull_, options);
			case 'ColPush':
				var push_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPush, push_, options);
			case 'ColOrder':
				var order_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOrder, order_, options);
			case 'ColAlign':
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColAlign, align, options);
			default:
				var align = modifier.a;
				return _Utils_update(
					options,
					{
						textAlign: $elm$core$Maybe$Just(align)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$columnCountOption = function (size) {
	switch (size.$) {
		case 'Col':
			return $elm$core$Maybe$Nothing;
		case 'Col1':
			return $elm$core$Maybe$Just('1');
		case 'Col2':
			return $elm$core$Maybe$Just('2');
		case 'Col3':
			return $elm$core$Maybe$Just('3');
		case 'Col4':
			return $elm$core$Maybe$Just('4');
		case 'Col5':
			return $elm$core$Maybe$Just('5');
		case 'Col6':
			return $elm$core$Maybe$Just('6');
		case 'Col7':
			return $elm$core$Maybe$Just('7');
		case 'Col8':
			return $elm$core$Maybe$Just('8');
		case 'Col9':
			return $elm$core$Maybe$Just('9');
		case 'Col10':
			return $elm$core$Maybe$Just('10');
		case 'Col11':
			return $elm$core$Maybe$Just('11');
		case 'Col12':
			return $elm$core$Maybe$Just('12');
		default:
			return $elm$core$Maybe$Just('auto');
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthClass = function (_v0) {
	var screenSize = _v0.screenSize;
	var columnCount = _v0.columnCount;
	return $elm$html$Html$Attributes$class(
		'col' + (A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return '-' + v;
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))) + A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return '-' + v;
				},
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$columnCountOption(columnCount)))));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthsToAttributes = function (widths) {
	var width_ = function (w) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthClass, w);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, width_, widths));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultColOptions = {alignLg: $elm$core$Maybe$Nothing, alignMd: $elm$core$Maybe$Nothing, alignSm: $elm$core$Maybe$Nothing, alignXl: $elm$core$Maybe$Nothing, alignXs: $elm$core$Maybe$Nothing, attributes: _List_Nil, offsetLg: $elm$core$Maybe$Nothing, offsetMd: $elm$core$Maybe$Nothing, offsetSm: $elm$core$Maybe$Nothing, offsetXl: $elm$core$Maybe$Nothing, offsetXs: $elm$core$Maybe$Nothing, orderLg: $elm$core$Maybe$Nothing, orderMd: $elm$core$Maybe$Nothing, orderSm: $elm$core$Maybe$Nothing, orderXl: $elm$core$Maybe$Nothing, orderXs: $elm$core$Maybe$Nothing, pullLg: $elm$core$Maybe$Nothing, pullMd: $elm$core$Maybe$Nothing, pullSm: $elm$core$Maybe$Nothing, pullXl: $elm$core$Maybe$Nothing, pullXs: $elm$core$Maybe$Nothing, pushLg: $elm$core$Maybe$Nothing, pushMd: $elm$core$Maybe$Nothing, pushSm: $elm$core$Maybe$Nothing, pushXl: $elm$core$Maybe$Nothing, pushXs: $elm$core$Maybe$Nothing, textAlign: $elm$core$Maybe$Nothing, widthLg: $elm$core$Maybe$Nothing, widthMd: $elm$core$Maybe$Nothing, widthSm: $elm$core$Maybe$Nothing, widthXl: $elm$core$Maybe$Nothing, widthXs: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetCountOption = function (size) {
	switch (size.$) {
		case 'Offset0':
			return '0';
		case 'Offset1':
			return '1';
		case 'Offset2':
			return '2';
		case 'Offset3':
			return '3';
		case 'Offset4':
			return '4';
		case 'Offset5':
			return '5';
		case 'Offset6':
			return '6';
		case 'Offset7':
			return '7';
		case 'Offset8':
			return '8';
		case 'Offset9':
			return '9';
		case 'Offset10':
			return '10';
		default:
			return '11';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString = function (screenSize) {
	var _v0 = $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize);
	if (_v0.$ === 'Just') {
		var s = _v0.a;
		return '-' + (s + '-');
	} else {
		return '-';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetClass = function (_v0) {
	var screenSize = _v0.screenSize;
	var offsetCount = _v0.offsetCount;
	return $elm$html$Html$Attributes$class(
		'offset' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetCountOption(offsetCount)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetsToAttributes = function (offsets) {
	var offset_ = function (m) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetClass, m);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, offset_, offsets));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderColOption = function (size) {
	switch (size.$) {
		case 'OrderFirst':
			return 'first';
		case 'Order1':
			return '1';
		case 'Order2':
			return '2';
		case 'Order3':
			return '3';
		case 'Order4':
			return '4';
		case 'Order5':
			return '5';
		case 'Order6':
			return '6';
		case 'Order7':
			return '7';
		case 'Order8':
			return '8';
		case 'Order9':
			return '9';
		case 'Order10':
			return '10';
		case 'Order11':
			return '11';
		case 'Order12':
			return '12';
		default:
			return 'last';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderToAttributes = function (orders) {
	var order_ = function (m) {
		if (m.$ === 'Just') {
			var screenSize = m.a.screenSize;
			var moveCount = m.a.moveCount;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'order' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderColOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, order_, orders));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption = function (size) {
	switch (size.$) {
		case 'Move0':
			return '0';
		case 'Move1':
			return '1';
		case 'Move2':
			return '2';
		case 'Move3':
			return '3';
		case 'Move4':
			return '4';
		case 'Move5':
			return '5';
		case 'Move6':
			return '6';
		case 'Move7':
			return '7';
		case 'Move8':
			return '8';
		case 'Move9':
			return '9';
		case 'Move10':
			return '10';
		case 'Move11':
			return '11';
		default:
			return '12';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$pullsToAttributes = function (pulls) {
	var pull_ = function (m) {
		if (m.$ === 'Just') {
			var screenSize = m.a.screenSize;
			var moveCount = m.a.moveCount;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'pull' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, pull_, pulls));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$pushesToAttributes = function (pushes) {
	var push_ = function (m) {
		if (m.$ === 'Just') {
			var screenSize = m.a.screenSize;
			var moveCount = m.a.moveCount;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'push' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, push_, pushes));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$verticalAlignOption = function (align) {
	switch (align.$) {
		case 'Top':
			return 'start';
		case 'Middle':
			return 'center';
		default:
			return 'end';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignClass = F2(
	function (prefix, _v0) {
		var align = _v0.align;
		var screenSize = _v0.screenSize;
		return $elm$html$Html$Attributes$class(
			_Utils_ap(
				prefix,
				_Utils_ap(
					A2(
						$elm$core$Maybe$withDefault,
						'',
						A2(
							$elm$core$Maybe$map,
							function (v) {
								return v + '-';
							},
							$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))),
					$rundis$elm_bootstrap$Bootstrap$Grid$Internal$verticalAlignOption(align))));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes = F2(
	function (prefix, aligns) {
		var align = function (a) {
			return A2(
				$elm$core$Maybe$map,
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignClass(prefix),
				a);
		};
		return A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A2($elm$core$List$map, align, aligns));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOption, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultColOptions, modifiers);
	var shouldAddDefaultXs = !$elm$core$List$length(
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[options.widthXs, options.widthSm, options.widthMd, options.widthLg, options.widthXl])));
	return _Utils_ap(
		$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthsToAttributes(
			_List_fromArray(
				[
					shouldAddDefaultXs ? $elm$core$Maybe$Just(
					A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width, $rundis$elm_bootstrap$Bootstrap$General$Internal$XS, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col)) : options.widthXs,
					options.widthSm,
					options.widthMd,
					options.widthLg,
					options.widthXl
				])),
		_Utils_ap(
			$rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetsToAttributes(
				_List_fromArray(
					[options.offsetXs, options.offsetSm, options.offsetMd, options.offsetLg, options.offsetXl])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$pullsToAttributes(
					_List_fromArray(
						[options.pullXs, options.pullSm, options.pullMd, options.pullLg, options.pullXl])),
				_Utils_ap(
					$rundis$elm_bootstrap$Bootstrap$Grid$Internal$pushesToAttributes(
						_List_fromArray(
							[options.pushXs, options.pushSm, options.pushMd, options.pushLg, options.pushXl])),
					_Utils_ap(
						$rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderToAttributes(
							_List_fromArray(
								[options.orderXs, options.orderSm, options.orderMd, options.orderLg, options.orderXl])),
						_Utils_ap(
							A2(
								$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes,
								'align-self-',
								_List_fromArray(
									[options.alignXs, options.alignSm, options.alignMd, options.alignLg, options.alignXl])),
							_Utils_ap(
								function () {
									var _v0 = options.textAlign;
									if (_v0.$ === 'Just') {
										var a = _v0.a;
										return _List_fromArray(
											[
												$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(a)
											]);
									} else {
										return _List_Nil;
									}
								}(),
								options.attributes)))))));
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $rundis$elm_bootstrap$Bootstrap$Grid$renderCol = function (column) {
	switch (column.$) {
		case 'Column':
			var options = column.a.options;
			var children = column.a.children;
			return A2(
				$elm$html$Html$div,
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes(options),
				children);
		case 'ColBreak':
			var e = column.a;
			return e;
		default:
			var options = column.a.options;
			var children = column.a.children;
			return A3(
				$elm$html$Html$Keyed$node,
				'div',
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes(options),
				children);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowHAlign = F2(
	function (align, options) {
		var _v0 = align.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						hAlignXs: $elm$core$Maybe$Just(align)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						hAlignSm: $elm$core$Maybe$Just(align)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						hAlignMd: $elm$core$Maybe$Just(align)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						hAlignLg: $elm$core$Maybe$Just(align)
					});
			default:
				return _Utils_update(
					options,
					{
						hAlignXl: $elm$core$Maybe$Just(align)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowVAlign = F2(
	function (align_, options) {
		var _v0 = align_.screenSize;
		switch (_v0.$) {
			case 'XS':
				return _Utils_update(
					options,
					{
						vAlignXs: $elm$core$Maybe$Just(align_)
					});
			case 'SM':
				return _Utils_update(
					options,
					{
						vAlignSm: $elm$core$Maybe$Just(align_)
					});
			case 'MD':
				return _Utils_update(
					options,
					{
						vAlignMd: $elm$core$Maybe$Just(align_)
					});
			case 'LG':
				return _Utils_update(
					options,
					{
						vAlignLg: $elm$core$Maybe$Just(align_)
					});
			default:
				return _Utils_update(
					options,
					{
						vAlignXl: $elm$core$Maybe$Just(align_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowOption = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 'RowAttrs':
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						attributes: _Utils_ap(options.attributes, attrs)
					});
			case 'RowVAlign':
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowVAlign, align, options);
			default:
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowHAlign, align, options);
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultRowOptions = {attributes: _List_Nil, hAlignLg: $elm$core$Maybe$Nothing, hAlignMd: $elm$core$Maybe$Nothing, hAlignSm: $elm$core$Maybe$Nothing, hAlignXl: $elm$core$Maybe$Nothing, hAlignXs: $elm$core$Maybe$Nothing, vAlignLg: $elm$core$Maybe$Nothing, vAlignMd: $elm$core$Maybe$Nothing, vAlignSm: $elm$core$Maybe$Nothing, vAlignXl: $elm$core$Maybe$Nothing, vAlignXs: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$horizontalAlignOption = function (align) {
	switch (align.$) {
		case 'Left':
			return 'start';
		case 'Center':
			return 'center';
		case 'Right':
			return 'end';
		case 'Around':
			return 'around';
		default:
			return 'between';
	}
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$hAlignClass = function (_v0) {
	var align = _v0.align;
	var screenSize = _v0.screenSize;
	return $elm$html$Html$Attributes$class(
		'justify-content-' + (A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return v + '-';
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))) + $rundis$elm_bootstrap$Bootstrap$General$Internal$horizontalAlignOption(align)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$hAlignsToAttributes = function (aligns) {
	var align = function (a) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$General$Internal$hAlignClass, a);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, align, aligns));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowOption, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultRowOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('row')
			]),
		_Utils_ap(
			A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes,
				'align-items-',
				_List_fromArray(
					[options.vAlignXs, options.vAlignSm, options.vAlignMd, options.vAlignLg, options.vAlignXl])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$hAlignsToAttributes(
					_List_fromArray(
						[options.hAlignXs, options.hAlignSm, options.hAlignMd, options.hAlignLg, options.hAlignXl])),
				options.attributes)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$row = F2(
	function (options, cols) {
		return A2(
			$elm$html$Html$div,
			$rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowAttributes(options),
			A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Grid$renderCol, cols));
	});
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$Size = function (a) {
	return {$: 'Size', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$ButtonGroup$small = $rundis$elm_bootstrap$Bootstrap$ButtonGroup$Size($rundis$elm_bootstrap$Bootstrap$General$Internal$SM);
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col12 = {$: 'Col12'};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$xs12 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, $rundis$elm_bootstrap$Bootstrap$General$Internal$XS, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col12);
var $author$project$Main$cardPoolView = function (model) {
	var showCardDetailsToggle = A2(
		$rundis$elm_bootstrap$Bootstrap$ButtonGroup$checkboxButtonGroup,
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$ButtonGroup$small,
				$rundis$elm_bootstrap$Bootstrap$ButtonGroup$attrs(
				_List_fromArray(
					[
						$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml3,
						A2($elm$html$Html$Attributes$style, 'min-width', '2em')
					]))
			]),
		_List_fromArray(
			[
				A3(
				$rundis$elm_bootstrap$Bootstrap$ButtonGroup$checkboxButton,
				model.showCardPoolDetails,
				_List_fromArray(
					[
						$rundis$elm_bootstrap$Bootstrap$Button$secondary,
						$rundis$elm_bootstrap$Bootstrap$Button$small,
						$rundis$elm_bootstrap$Bootstrap$Button$onClick($author$project$Main$ToggleCardDetails)
					]),
				_List_fromArray(
					[
						$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$info)
					]))
			]));
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Grid$col,
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs12,
				$rundis$elm_bootstrap$Bootstrap$Grid$Col$md6,
				$rundis$elm_bootstrap$Bootstrap$Grid$Col$lg8,
				$rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('left-column'),
						$elm$html$Html$Attributes$class('overflow-scroll content-column')
					]))
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('top-bar')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Utilities$Border$rounded,
								$elm$html$Html$Attributes$class('d-flex justify-content-between pr-1 pl-1 pt-1 pb-1 bg-dark shadow ')
							]),
						_List_fromArray(
							[
								$author$project$Main$filterWithClearButton(
								A2($elm$core$Maybe$withDefault, '', model.filter)),
								$author$project$Main$cardDisplayToggle(model.cardDisplay),
								showCardDetailsToggle
							]))
					])),
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$row,
				_List_fromArray(
					[
						$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'margin-top', '0.5em')
							]))
					]),
				A2(
					$elm$core$List$map,
					A2($author$project$Main$fullCardView, model.showCardPoolDetails, model.cardDisplay),
					A2($author$project$Main$filteredCards, model.filter, model.notSelectedCards)))
			]));
};
var $author$project$Main$ToggleHelpModal = {$: 'ToggleHelpModal'};
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $lattyware$elm_fontawesome$FontAwesome$Solid$question = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'question',
	384,
	512,
	_List_fromArray(
		['M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z']));
var $author$project$Main$helpActionButton = A2(
	$elm$html$Html$a,
	_List_fromArray(
		[
			$elm$html$Html$Attributes$id('help-toggle-button'),
			$elm$html$Html$Attributes$class('action-button-right action-button-2 btn btn-light d-flex pointer'),
			$elm$html$Html$Events$onClick($author$project$Main$ToggleHelpModal)
		]),
	_List_fromArray(
		[
			A2(
			$elm$html$Html$h2,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('m-auto grey no-decoration')
				]),
			_List_fromArray(
				[
					$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$question)
				]))
		]));
var $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsStart = $elm$html$Html$Attributes$class('align-items-start');
var $rundis$elm_bootstrap$Bootstrap$Modal$Body = function (a) {
	return {$: 'Body', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Modal$Config = function (a) {
	return {$: 'Config', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Modal$body = F3(
	function (attributes, children, _v0) {
		var conf = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Modal$Config(
			_Utils_update(
				conf,
				{
					body: $elm$core$Maybe$Just(
						$rundis$elm_bootstrap$Bootstrap$Modal$Body(
							{attributes: attributes, children: children}))
				}));
	});
var $rundis$elm_bootstrap$Bootstrap$Modal$config = function (closeMsg) {
	return $rundis$elm_bootstrap$Bootstrap$Modal$Config(
		{
			body: $elm$core$Maybe$Nothing,
			closeMsg: closeMsg,
			footer: $elm$core$Maybe$Nothing,
			header: $elm$core$Maybe$Nothing,
			options: {attrs: _List_Nil, centered: true, hideOnBackdropClick: true, modalSize: $elm$core$Maybe$Nothing, scrollableBody: false},
			withAnimation: $elm$core$Maybe$Nothing
		});
};
var $rundis$elm_bootstrap$Bootstrap$Modal$Footer = function (a) {
	return {$: 'Footer', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Modal$footer = F3(
	function (attributes, children, _v0) {
		var conf = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Modal$Config(
			_Utils_update(
				conf,
				{
					footer: $elm$core$Maybe$Just(
						$rundis$elm_bootstrap$Bootstrap$Modal$Footer(
							{attributes: attributes, children: children}))
				}));
	});
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $rundis$elm_bootstrap$Bootstrap$Modal$Header = function (a) {
	return {$: 'Header', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Modal$header = F3(
	function (attributes, children, _v0) {
		var conf = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Modal$Config(
			_Utils_update(
				conf,
				{
					header: $elm$core$Maybe$Just(
						$rundis$elm_bootstrap$Bootstrap$Modal$Header(
							{attributes: attributes, children: children}))
				}));
	});
var $rundis$elm_bootstrap$Bootstrap$Modal$titledHeader = F3(
	function (itemFn, attributes, children) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Modal$header,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					itemFn,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$Attributes$class('modal-title'),
						attributes),
					children)
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Modal$h3 = $rundis$elm_bootstrap$Bootstrap$Modal$titledHeader($elm$html$Html$h3);
var $elm$html$Html$h5 = _VirtualDom_node('h5');
var $rundis$elm_bootstrap$Bootstrap$Modal$hideOnBackdropClick = F2(
	function (hide, _v0) {
		var conf = _v0.a;
		var options = conf.options;
		return $rundis$elm_bootstrap$Bootstrap$Modal$Config(
			_Utils_update(
				conf,
				{
					options: _Utils_update(
						options,
						{hideOnBackdropClick: hide})
				}));
	});
var $rundis$elm_bootstrap$Bootstrap$Modal$large = function (_v0) {
	var conf = _v0.a;
	var options = conf.options;
	return $rundis$elm_bootstrap$Bootstrap$Modal$Config(
		_Utils_update(
			conf,
			{
				options: _Utils_update(
					options,
					{
						modalSize: $elm$core$Maybe$Just($rundis$elm_bootstrap$Bootstrap$General$Internal$LG)
					})
			}));
};
var $lattyware$elm_fontawesome$FontAwesome$Solid$layerGroup = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'layer-group',
	512,
	512,
	_List_fromArray(
		['M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z']));
var $lattyware$elm_fontawesome$FontAwesome$Solid$list = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'list',
	512,
	512,
	_List_fromArray(
		['M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z']));
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr2 = $elm$html$Html$Attributes$class('mr-2');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt1 = $elm$html$Html$Attributes$class('mt-1');
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Outlined = function (a) {
	return {$: 'Outlined', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Primary = {$: 'Primary'};
var $rundis$elm_bootstrap$Bootstrap$Button$outlinePrimary = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Outlined($rundis$elm_bootstrap$Bootstrap$Internal$Button$Primary));
var $lattyware$elm_fontawesome$FontAwesome$Solid$share = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'share',
	512,
	512,
	_List_fromArray(
		['M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z']));
var $rundis$elm_bootstrap$Bootstrap$Modal$StartClose = {$: 'StartClose'};
var $rundis$elm_bootstrap$Bootstrap$Modal$getCloseMsg = function (config_) {
	var _v0 = config_.withAnimation;
	if (_v0.$ === 'Just') {
		var animationMsg = _v0.a;
		return animationMsg($rundis$elm_bootstrap$Bootstrap$Modal$StartClose);
	} else {
		return config_.closeMsg;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Modal$isFade = function (conf) {
	return A2(
		$elm$core$Maybe$withDefault,
		false,
		A2(
			$elm$core$Maybe$map,
			function (_v0) {
				return true;
			},
			conf.withAnimation));
};
var $rundis$elm_bootstrap$Bootstrap$Modal$backdrop = F2(
	function (visibility, conf) {
		var attributes = function () {
			switch (visibility.$) {
				case 'Show':
					return _Utils_ap(
						_List_fromArray(
							[
								$elm$html$Html$Attributes$classList(
								_List_fromArray(
									[
										_Utils_Tuple2('modal-backdrop', true),
										_Utils_Tuple2(
										'fade',
										$rundis$elm_bootstrap$Bootstrap$Modal$isFade(conf)),
										_Utils_Tuple2('show', true)
									]))
							]),
						conf.options.hideOnBackdropClick ? _List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								$rundis$elm_bootstrap$Bootstrap$Modal$getCloseMsg(conf))
							]) : _List_Nil);
				case 'StartClose':
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('modal-backdrop', true),
									_Utils_Tuple2('fade', true),
									_Utils_Tuple2('show', true)
								]))
						]);
				case 'FadeClose':
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('modal-backdrop', true),
									_Utils_Tuple2('fade', true),
									_Utils_Tuple2('show', false)
								]))
						]);
				default:
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('modal-backdrop', false),
									_Utils_Tuple2(
									'fade',
									$rundis$elm_bootstrap$Bootstrap$Modal$isFade(conf)),
									_Utils_Tuple2('show', false)
								]))
						]);
			}
		}();
		return _List_fromArray(
			[
				A2($elm$html$Html$div, attributes, _List_Nil)
			]);
	});
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$className = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['className']),
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$fail = _Json_fail;
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $rundis$elm_bootstrap$Bootstrap$Modal$containerClickDecoder = function (closeMsg) {
	return A2(
		$elm$json$Json$Decode$andThen,
		function (c) {
			return A2($elm$core$String$contains, 'elm-bootstrap-modal', c) ? $elm$json$Json$Decode$succeed(closeMsg) : $elm$json$Json$Decode$fail('ignoring');
		},
		$rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$target($rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$className));
};
var $rundis$elm_bootstrap$Bootstrap$Modal$display = F2(
	function (visibility, conf) {
		switch (visibility.$) {
			case 'Show':
				return _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
						A2($elm$html$Html$Attributes$style, 'display', 'block'),
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('modal', true),
								_Utils_Tuple2(
								'fade',
								$rundis$elm_bootstrap$Bootstrap$Modal$isFade(conf)),
								_Utils_Tuple2('show', true)
							]))
					]);
			case 'StartClose':
				return _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
						A2($elm$html$Html$Attributes$style, 'display', 'block'),
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('modal', true),
								_Utils_Tuple2('fade', true),
								_Utils_Tuple2('show', true)
							]))
					]);
			case 'FadeClose':
				return _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
						A2($elm$html$Html$Attributes$style, 'display', 'block'),
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('modal', true),
								_Utils_Tuple2('fade', true),
								_Utils_Tuple2('show', false)
							])),
						A2(
						$elm$html$Html$Events$on,
						'transitionend',
						$elm$json$Json$Decode$succeed(conf.closeMsg))
					]);
			default:
				return _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'height', '0px'),
						A2($elm$html$Html$Attributes$style, 'display', 'block'),
						$elm$html$Html$Attributes$classList(
						_List_fromArray(
							[
								_Utils_Tuple2('modal', true),
								_Utils_Tuple2(
								'fade',
								$rundis$elm_bootstrap$Bootstrap$Modal$isFade(conf)),
								_Utils_Tuple2('show', false)
							]))
					]);
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Modal$modalClass = function (size) {
	var _v0 = $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(size);
	if (_v0.$ === 'Just') {
		var s = _v0.a;
		return _List_fromArray(
			[
				$elm$html$Html$Attributes$class('modal-' + s)
			]);
	} else {
		return _List_Nil;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Modal$modalAttributes = function (options) {
	return _Utils_ap(
		options.attrs,
		_Utils_ap(
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('modal-dialog', true),
							_Utils_Tuple2('modal-dialog-centered', options.centered),
							_Utils_Tuple2('modal-dialog-scrollable', options.scrollableBody)
						])),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto')
				]),
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Modal$modalClass, options.modalSize))));
};
var $rundis$elm_bootstrap$Bootstrap$Modal$renderBody = function (maybeBody) {
	if (maybeBody.$ === 'Just') {
		var cfg = maybeBody.a.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$html$Html$div,
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$class('modal-body'),
					cfg.attributes),
				cfg.children));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Modal$renderFooter = function (maybeFooter) {
	if (maybeFooter.$ === 'Just') {
		var cfg = maybeFooter.a.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$html$Html$div,
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$class('modal-footer'),
					cfg.attributes),
				cfg.children));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Modal$closeButton = function (closeMsg) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('close'),
				$elm$html$Html$Events$onClick(closeMsg)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('×')
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Modal$renderHeader = function (conf_) {
	var _v0 = conf_.header;
	if (_v0.$ === 'Just') {
		var cfg = _v0.a.a;
		return $elm$core$Maybe$Just(
			A2(
				$elm$html$Html$div,
				A2(
					$elm$core$List$cons,
					$elm$html$Html$Attributes$class('modal-header'),
					cfg.attributes),
				_Utils_ap(
					cfg.children,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Modal$closeButton(
							$rundis$elm_bootstrap$Bootstrap$Modal$getCloseMsg(conf_))
						]))));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$html$Html$Attributes$tabindex = function (n) {
	return A2(
		_VirtualDom_attribute,
		'tabIndex',
		$elm$core$String$fromInt(n));
};
var $rundis$elm_bootstrap$Bootstrap$Modal$view = F2(
	function (visibility, _v0) {
		var conf = _v0.a;
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_Utils_ap(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$tabindex(-1)
								]),
							A2($rundis$elm_bootstrap$Bootstrap$Modal$display, visibility, conf)),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_Utils_ap(
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$attribute, 'role', 'document'),
											$elm$html$Html$Attributes$class('elm-bootstrap-modal')
										]),
									_Utils_ap(
										$rundis$elm_bootstrap$Bootstrap$Modal$modalAttributes(conf.options),
										conf.options.hideOnBackdropClick ? _List_fromArray(
											[
												A2(
												$elm$html$Html$Events$on,
												'click',
												$rundis$elm_bootstrap$Bootstrap$Modal$containerClickDecoder(conf.closeMsg))
											]) : _List_Nil)),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('modal-content')
											]),
										A2(
											$elm$core$List$filterMap,
											$elm$core$Basics$identity,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Modal$renderHeader(conf),
													$rundis$elm_bootstrap$Bootstrap$Modal$renderBody(conf.body),
													$rundis$elm_bootstrap$Bootstrap$Modal$renderFooter(conf.footer)
												])))
									]))
							]))
					]),
				A2($rundis$elm_bootstrap$Bootstrap$Modal$backdrop, visibility, conf)));
	});
var $author$project$Main$helpModal = function (visibility) {
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Modal$view,
		visibility,
		A3(
			$rundis$elm_bootstrap$Bootstrap$Modal$footer,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Button$button,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Button$outlinePrimary,
							$rundis$elm_bootstrap$Bootstrap$Button$attrs(
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Main$ToggleHelpModal)
								]))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Close')
						]))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Modal$body,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'overflow', 'scroll'),
						A2($elm$html$Html$Attributes$style, 'max-height', 'calc(70vh)')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h5,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Card Pool')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('The card pool contains all cards except the ones you have currently selected.')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('You can use the filter to filter for arbitrary words. Only cards whose title or description contain all words (in any order) are displayed.')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('To share your deck use the share dialog (see below) or copy the current url.')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Use the x-button to clear the filter.')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Next to the filter there are three buttons:')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsCenter]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr2]),
								_List_fromArray(
									[
										$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$alignLeft)
									])),
								$elm$html$Html$text('Displays cards in the pool as text.')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsCenter]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr2]),
								_List_fromArray(
									[
										$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$image)
									])),
								$elm$html$Html$text('Displays cards in the pool as images.')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsCenter]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr2]),
								_List_fromArray(
									[
										$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$info)
									])),
								$elm$html$Html$text('Displays card supply line details.')
							])),
						A2(
						$elm$html$Html$h5,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt3]),
						_List_fromArray(
							[
								$elm$html$Html$text('Card Details')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('The card details show you the name of the supply line in the top left.')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Below that is the index of the card in the supply line. E.g. \"4/45\" means that this is the fourth card in a supply line with a total of 45 cards')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('The left hand side shows you the copper cost of the card in the top and the total cost to unlock the card (= buy all previous items in the supply line including cosmetics) in the bottom.')
							])),
						A2(
						$elm$html$Html$h5,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt3]),
						_List_fromArray(
							[
								$elm$html$Html$text('Inventory')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('The inventory contains all cards you have selected. You may select more than 15 cards.')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('You can arrange and remove cards by pressing the arrow up/down or x button.')
							])),
						A2(
						$elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('There are two ways to display the inventory:')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsStart, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt1]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr2]),
								_List_fromArray(
									[
										$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$layerGroup)
									])),
								$elm$html$Html$text('Show each card individually.')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsStart, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt1]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr2]),
								_List_fromArray(
									[
										$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$list)
									])),
								$elm$html$Html$text('Show a summarized view of the cards. All passive effects (like +X% health) are merged into single entries.'),
								$elm$html$Html$text('E.g. `+15% Health`, `-5% Health` and `+10% Health` only show as a single entry (`+20% Health).'),
								$elm$html$Html$text('This view also summarizes the required supply line progress as well as required achievements.')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsStart, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt1]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr2]),
								_List_fromArray(
									[
										$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$share)
									])),
								$elm$html$Html$text('Opens the share dialog.')
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsStart, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt1]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr2]),
								_List_fromArray(
									[
										$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$times)
									])),
								$elm$html$Html$text('Clears the current inventory.')
							]))
					]),
				A3(
					$rundis$elm_bootstrap$Bootstrap$Modal$h3,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('How to use')
						]),
					A2(
						$rundis$elm_bootstrap$Bootstrap$Modal$hideOnBackdropClick,
						true,
						$rundis$elm_bootstrap$Bootstrap$Modal$large(
							$rundis$elm_bootstrap$Bootstrap$Modal$config($author$project$Main$ToggleHelpModal)))))));
};
var $lattyware$elm_fontawesome$FontAwesome$Icon$styled = F2(
	function (attributes, _v0) {
		var presentation = _v0.a;
		return $lattyware$elm_fontawesome$FontAwesome$Icon$Presentation(
			_Utils_update(
				presentation,
				{
					attributes: _Utils_ap(presentation.attributes, attributes)
				}));
	});
var $lattyware$elm_fontawesome$FontAwesome$Solid$suitcase = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'suitcase',
	512,
	512,
	_List_fromArray(
		['M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z']));
var $author$project$Main$inventoryToggleButton = function (numberOfSelectedCards) {
	var content = A2(
		$elm$html$Html$div,
		_List_fromArray(
			[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$col]),
		_List_fromArray(
			[
				$lattyware$elm_fontawesome$FontAwesome$Icon$view(
				A2(
					$lattyware$elm_fontawesome$FontAwesome$Icon$styled,
					_List_Nil,
					$lattyware$elm_fontawesome$FontAwesome$Icon$present($lattyware$elm_fontawesome$FontAwesome$Solid$suitcase))),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('small-text')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(
						$elm$core$String$fromInt(numberOfSelectedCards))
					]))
			]));
	var background = (numberOfSelectedCards <= 15) ? 'btn-light' : 'btn-warning';
	return A2(
		$elm$html$Html$a,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$id('inventory-toggle-button'),
				$elm$html$Html$Attributes$class('action-button-right action-button-1 btn d-flex d-md-none pointer ' + background)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h2,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('m-auto grey no-decoration')
					]),
				_List_fromArray(
					[content]))
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Dark = {$: 'Dark'};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Border$dark = A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'border', $rundis$elm_bootstrap$Bootstrap$Internal$Role$Dark);
var $author$project$Main$ChangeInventoryDisplayType = F2(
	function (a, b) {
		return {$: 'ChangeInventoryDisplayType', a: a, b: b};
	});
var $author$project$Main$InventoryAsSummary = {$: 'InventoryAsSummary'};
var $author$project$Main$ToggleSummarizeViewHint = function (a) {
	return {$: 'ToggleSummarizeViewHint', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Alert$Config = function (a) {
	return {$: 'Config', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Alert$children = F2(
	function (children_, _v0) {
		var configRec = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Alert$Config(
			_Utils_update(
				configRec,
				{children: children_}));
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Secondary = {$: 'Secondary'};
var $rundis$elm_bootstrap$Bootstrap$Alert$config = $rundis$elm_bootstrap$Bootstrap$Alert$Config(
	{attributes: _List_Nil, children: _List_Nil, dismissable: $elm$core$Maybe$Nothing, role: $rundis$elm_bootstrap$Bootstrap$Internal$Role$Secondary, visibility: $rundis$elm_bootstrap$Bootstrap$Alert$Shown, withAnimation: false});
var $rundis$elm_bootstrap$Bootstrap$Alert$dismissableWithAnimation = F2(
	function (dismissMsg, _v0) {
		var configRec = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Alert$Config(
			_Utils_update(
				configRec,
				{
					dismissable: $elm$core$Maybe$Just(dismissMsg),
					withAnimation: true
				}));
	});
var $rundis$elm_bootstrap$Bootstrap$Progress$Danger = {$: 'Danger'};
var $rundis$elm_bootstrap$Bootstrap$Progress$Roled = function (a) {
	return {$: 'Roled', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Progress$danger = $rundis$elm_bootstrap$Bootstrap$Progress$Roled(
	$elm$core$Maybe$Just($rundis$elm_bootstrap$Bootstrap$Progress$Danger));
var $author$project$Cards$emptySupplyLineRequirements = {
	achievementRequirement: _List_Nil,
	alleyRequirement: {requiredProgress: 0, totalElements: $author$project$Cards$alleySupplyLineCount},
	clinicRequirement: {requiredProgress: 0, totalElements: $author$project$Cards$clinicSupplyLineCount},
	nestRequirement: {requiredProgress: 0, totalElements: $author$project$Cards$nestSupplyLineCount},
	rovingMerchantsRequirement: _List_Nil
};
var $rundis$elm_bootstrap$Bootstrap$Progress$Info = {$: 'Info'};
var $rundis$elm_bootstrap$Bootstrap$Progress$info = $rundis$elm_bootstrap$Bootstrap$Progress$Roled(
	$elm$core$Maybe$Just($rundis$elm_bootstrap$Bootstrap$Progress$Info));
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml4 = $elm$html$Html$Attributes$class('ml-4');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr4 = $elm$html$Html$Attributes$class('mr-4');
var $elm$html$Html$p = _VirtualDom_node('p');
var $rundis$elm_bootstrap$Bootstrap$Progress$Options = function (a) {
	return {$: 'Options', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Progress$applyOption = F2(
	function (modifier, _v0) {
		var options = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Progress$Options(
			function () {
				switch (modifier.$) {
					case 'Value':
						var value_ = modifier.a;
						return _Utils_update(
							options,
							{value: value_});
					case 'Height':
						var height_ = modifier.a;
						return _Utils_update(
							options,
							{height: height_});
					case 'Label':
						var label_ = modifier.a;
						return _Utils_update(
							options,
							{label: label_});
					case 'Roled':
						var role_ = modifier.a;
						return _Utils_update(
							options,
							{role: role_});
					case 'Striped':
						var striped_ = modifier.a;
						return _Utils_update(
							options,
							{striped: striped_});
					case 'Animated':
						var animated_ = modifier.a;
						return _Utils_update(
							options,
							{animated: animated_});
					case 'Attrs':
						var attrs_ = modifier.a;
						return _Utils_update(
							options,
							{attributes: attrs_});
					default:
						var attrs_ = modifier.a;
						return _Utils_update(
							options,
							{wrapperAttributes: attrs_});
				}
			}());
	});
var $rundis$elm_bootstrap$Bootstrap$Progress$defaultOptions = $rundis$elm_bootstrap$Bootstrap$Progress$Options(
	{animated: false, attributes: _List_Nil, height: $elm$core$Maybe$Nothing, label: _List_Nil, role: $elm$core$Maybe$Nothing, striped: false, value: 0, wrapperAttributes: _List_Nil});
var $rundis$elm_bootstrap$Bootstrap$Progress$roleClass = function (role) {
	return $elm$html$Html$Attributes$class(
		function () {
			switch (role.$) {
				case 'Success':
					return 'bg-success';
				case 'Info':
					return 'bg-info';
				case 'Warning':
					return 'bg-warning';
				default:
					return 'bg-danger';
			}
		}());
};
var $rundis$elm_bootstrap$Bootstrap$Progress$toAttributes = function (_v0) {
	var options = _v0.a;
	return $elm$core$List$concat(
		_List_fromArray(
			[
				_List_fromArray(
				[
					A2($elm$html$Html$Attributes$attribute, 'role', 'progressbar'),
					A2(
					$elm$html$Html$Attributes$attribute,
					'aria-value-now',
					$elm$core$String$fromFloat(options.value)),
					A2($elm$html$Html$Attributes$attribute, 'aria-valuemin', '0'),
					A2($elm$html$Html$Attributes$attribute, 'aria-valuemax', '100'),
					A2(
					$elm$html$Html$Attributes$style,
					'width',
					$elm$core$String$fromFloat(options.value) + '%'),
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('progress-bar', true),
							_Utils_Tuple2('progress-bar-striped', options.striped || options.animated),
							_Utils_Tuple2('progress-bar-animated', options.animated)
						]))
				]),
				function () {
				var _v1 = options.height;
				if (_v1.$ === 'Just') {
					var height_ = _v1.a;
					return _List_fromArray(
						[
							A2(
							$elm$html$Html$Attributes$style,
							'height',
							$elm$core$String$fromInt(height_) + 'px')
						]);
				} else {
					return _List_Nil;
				}
			}(),
				function () {
				var _v2 = options.role;
				if (_v2.$ === 'Just') {
					var role_ = _v2.a;
					return _List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Progress$roleClass(role_)
						]);
				} else {
					return _List_Nil;
				}
			}(),
				options.attributes
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Progress$renderBar = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Progress$applyOption, $rundis$elm_bootstrap$Bootstrap$Progress$defaultOptions, modifiers);
	var opts = options.a;
	return A2(
		$elm$html$Html$div,
		$rundis$elm_bootstrap$Bootstrap$Progress$toAttributes(options),
		opts.label);
};
var $rundis$elm_bootstrap$Bootstrap$Progress$progress = function (modifiers) {
	var _v0 = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Progress$applyOption, $rundis$elm_bootstrap$Bootstrap$Progress$defaultOptions, modifiers);
	var options = _v0.a;
	return A2(
		$elm$html$Html$div,
		A2(
			$elm$core$List$cons,
			$elm$html$Html$Attributes$class('progress'),
			options.wrapperAttributes),
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$Progress$renderBar(modifiers)
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Progress$Success = {$: 'Success'};
var $rundis$elm_bootstrap$Bootstrap$Progress$success = $rundis$elm_bootstrap$Bootstrap$Progress$Roled(
	$elm$core$Maybe$Just($rundis$elm_bootstrap$Bootstrap$Progress$Success));
var $elm_community$list_extra$List$Extra$foldl1 = F2(
	function (func, list) {
		if (!list.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var x = list.a;
			var xs = list.b;
			return $elm$core$Maybe$Just(
				A3($elm$core$List$foldl, func, x, xs));
		}
	});
var $elm_community$list_extra$List$Extra$maximumWith = F2(
	function (comparator, list) {
		return A2(
			$elm_community$list_extra$List$Extra$foldl1,
			F2(
				function (x, y) {
					var _v0 = A2(comparator, x, y);
					if (_v0.$ === 'GT') {
						return x;
					} else {
						return y;
					}
				}),
			list);
	});
var $author$project$Cards$supplyLineRequirements = function (selection) {
	var requiredRovingMerchants = A2(
		$elm$core$List$map,
		function (s) {
			var _v2 = s.supplyLine.name;
			if (_v2.$ === 'RovingMerchants') {
				if (_v2.a.$ === 'Liberators') {
					var _v3 = _v2.a;
					return s.title + ' (Liberators)';
				} else {
					var _v4 = _v2.a;
					return s.title + ' (KSC Convoy)';
				}
			} else {
				return 'Unknown achievement';
			}
		},
		A2(
			$elm$core$List$filter,
			$author$project$Cards$isRovingMerchantLine,
			A2($elm$core$List$cons, selection.a, selection.b)));
	var requiredAchievements = A2(
		$elm$core$List$map,
		function (s) {
			var name = function () {
				var _v1 = s.supplyLine.name;
				if (_v1.$ === 'Accomplishment') {
					var x = _v1.a;
					return x;
				} else {
					return 'Unknown achievement';
				}
			}();
			var req = A2(
				$elm$core$Maybe$withDefault,
				'unknown requirement',
				A2(
					$elm$core$Maybe$map,
					function (a) {
						return a.requirement;
					},
					A2(
						$elm_community$list_extra$List$Extra$find,
						function (a) {
							return _Utils_eq(a.name, name) || _Utils_eq(a.card, name);
						},
						$author$project$AchievementData$achievements)));
			return {name: name, requirement: req};
		},
		A2(
			$elm$core$List$filter,
			$author$project$Cards$isAccomplishmentLine,
			A2($elm$core$List$cons, selection.a, selection.b)));
	var highestIndex = F2(
		function (predicate, _v0) {
			var c = _v0.a;
			var cc = _v0.b;
			var filtered = A2(
				$elm$core$List$filter,
				predicate,
				A2($elm$core$List$cons, c, cc));
			return A2(
				$elm$core$Maybe$withDefault,
				0,
				A2(
					$elm$core$Maybe$map,
					function (card) {
						return card.supplyLine.index;
					},
					A2(
						$elm_community$list_extra$List$Extra$maximumWith,
						F2(
							function (a, b) {
								return (_Utils_cmp(a.supplyLine.index, b.supplyLine.index) > 0) ? $elm$core$Basics$GT : (_Utils_eq(a.supplyLine.index, b.supplyLine.index) ? $elm$core$Basics$EQ : $elm$core$Basics$LT);
							}),
						filtered)));
		});
	var highestNestIndex = A2(highestIndex, $author$project$Cards$isNestLine, selection);
	var highestClinicIndex = A2(highestIndex, $author$project$Cards$isClinicLine, selection);
	var highestAlleyIndex = A2(highestIndex, $author$project$Cards$isAlleyLine, selection);
	return {
		achievementRequirement: requiredAchievements,
		alleyRequirement: {requiredProgress: highestAlleyIndex, totalElements: $author$project$Cards$alleySupplyLineCount},
		clinicRequirement: {requiredProgress: highestClinicIndex, totalElements: $author$project$Cards$clinicSupplyLineCount},
		nestRequirement: {requiredProgress: highestNestIndex, totalElements: $author$project$Cards$nestSupplyLineCount},
		rovingMerchantsRequirement: requiredRovingMerchants
	};
};
var $rundis$elm_bootstrap$Bootstrap$Progress$Value = function (a) {
	return {$: 'Value', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Progress$value = function (val) {
	return $rundis$elm_bootstrap$Bootstrap$Progress$Value(val);
};
var $rundis$elm_bootstrap$Bootstrap$Progress$WrapperAttrs = function (a) {
	return {$: 'WrapperAttrs', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Progress$wrapperAttrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Progress$WrapperAttrs(attrs_);
};
var $author$project$Main$inventoryProgressView = function (cards) {
	var requirements = function () {
		if (cards.b) {
			var head = cards.a;
			var tail = cards.b;
			return $author$project$Cards$supplyLineRequirements(
				_Utils_Tuple2(head, tail));
		} else {
			return $author$project$Cards$emptySupplyLineRequirements;
		}
	}();
	var rovingMerchantsList = $elm$core$List$isEmpty(requirements.rovingMerchantsRequirement) ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('col-xs-12 col-xl-6 pl-0 pl-xl-1 pr-0')
			]),
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$Card$view(
				A3(
					$rundis$elm_bootstrap$Bootstrap$Card$block,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$Block$attrs(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('inventory-summary-sub-card-body')
								]))
						]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
							A2(
								$elm$html$Html$ul,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('inventory-summary-sub-card-list pl-xl-3')
									]),
								A2(
									$elm$core$List$map,
									function (a) {
										return A2(
											$elm$html$Html$li,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text(a)
												]));
									},
									requirements.rovingMerchantsRequirement)))
						]),
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$header,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('inventory-summary-sub-card-header bg-transparent')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$small,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('Roving Merchants')
									]))
							]),
						$rundis$elm_bootstrap$Bootstrap$Card$config(
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$attrs(
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('inventory-summary-sub-card')
										]))
								])))))
			]));
	var progressCard = F2(
		function (header, progressBars) {
			return $rundis$elm_bootstrap$Bootstrap$Card$view(
				A3(
					$rundis$elm_bootstrap$Bootstrap$Card$block,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$Block$attrs(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('inventory-summary-sub-card-body')
								]))
						]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
							A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'padding-top', '1rem')
									]),
								progressBars))
						]),
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$header,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('inventory-summary-sub-card-header bg-transparent')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$small,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(header)
									]))
							]),
						$rundis$elm_bootstrap$Bootstrap$Card$config(
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$attrs(
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('inventory-summary-sub-card col-12'),
											A2($elm$html$Html$Attributes$style, 'padding-left', '0'),
											A2($elm$html$Html$Attributes$style, 'padding-right', '0')
										]))
								])))));
		});
	var progressBar = F3(
		function (supplyLineRequirement, color, label) {
			var completeLabel = label + (' (' + ($elm$core$String$fromInt(supplyLineRequirement.requiredProgress) + ('/' + ($elm$core$String$fromInt(supplyLineRequirement.totalElements) + ')'))));
			var b = supplyLineRequirement.totalElements;
			var a = supplyLineRequirement.requiredProgress * 100;
			var c = a / b;
			return A2(
				$elm$html$Html$p,
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml4, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr4, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsStart, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$alignItemsCenter]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$small,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'width', '7em')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(completeLabel)
									]))
							])),
						$rundis$elm_bootstrap$Bootstrap$Progress$progress(
						_List_fromArray(
							[
								color,
								$rundis$elm_bootstrap$Bootstrap$Progress$value(c),
								$rundis$elm_bootstrap$Bootstrap$Progress$wrapperAttrs(
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('bg-secondary'),
										A2($elm$html$Html$Attributes$style, 'flex-grow', '1')
									]))
							]))
					]));
		});
	var regularLines = A2(
		progressCard,
		'Supply Lines',
		_List_fromArray(
			[
				A3(progressBar, requirements.nestRequirement, $rundis$elm_bootstrap$Bootstrap$Progress$success, 'Nest'),
				A3(progressBar, requirements.alleyRequirement, $rundis$elm_bootstrap$Bootstrap$Progress$info, 'Alley'),
				A3(progressBar, requirements.clinicRequirement, $rundis$elm_bootstrap$Bootstrap$Progress$danger, 'Clinic')
			]));
	var achievementList = function () {
		var createLi = function (requirement) {
			return A2(
				$elm$html$Html$li,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$col]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(requirement.name)
									])),
								A2(
								$elm$html$Html$small,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(requirement.requirement)
									]))
							]))
					]));
		};
		return $elm$core$List$isEmpty(requirements.achievementRequirement) ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('col-xs-12 col-xl-6 pl-0 pr-0 pr-xl-1')
				]),
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$block,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Card$Block$attrs(
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('inventory-summary-sub-card-body')
									]))
							]),
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
								A2(
									$elm$html$Html$ul,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('inventory-summary-sub-card-list pl-xl-3')
										]),
									A2($elm$core$List$map, createLi, requirements.achievementRequirement)))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$header,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('inventory-summary-sub-card-header bg-transparent')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$small,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('Achievements')
										]))
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[
										$rundis$elm_bootstrap$Bootstrap$Card$attrs(
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('inventory-summary-sub-card')
											]))
									])))))
				]));
	}();
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Grid$col,
		_List_fromArray(
			[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs12]),
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$Card$view(
				A3(
					$rundis$elm_bootstrap$Bootstrap$Card$block,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$Block$attrs(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('inventory-summary-requirements-card-body')
								]))
						]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
							A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('row'),
										A2($elm$html$Html$Attributes$style, 'margin', '0')
									]),
								_List_fromArray(
									[regularLines, achievementList, rovingMerchantsList])))
						]),
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$header,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Deck Requirements')
							]),
						$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
			]));
};
var $author$project$Cards$Absolute = {$: 'Absolute'};
var $author$project$Cards$absOrRelToString = function (a) {
	if (a.$ === 'Absolute') {
		return 'absolute';
	} else {
		return 'relative';
	}
};
var $elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {index: index, match: match, number: number, submatches: submatches};
	});
var $elm$regex$Regex$contains = _Regex_contains;
var $elm$regex$Regex$find = _Regex_findAtMost(_Regex_infinity);
var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $author$project$List$Extras$groupBy = F2(
	function (selector, items) {
		var run = F2(
			function (accumulator, remaining) {
				run:
				while (true) {
					if (!remaining.b) {
						return accumulator;
					} else {
						var head = remaining.a;
						var tail = remaining.b;
						var mapped = selector(head);
						var previousValues = A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, mapped, accumulator));
						var newValues = A2($elm$core$List$cons, head, previousValues);
						var updatedDict = A3(
							$elm$core$Dict$insert,
							mapped,
							newValues,
							A2($elm$core$Dict$remove, mapped, accumulator));
						var $temp$accumulator = updatedDict,
							$temp$remaining = tail;
						accumulator = $temp$accumulator;
						remaining = $temp$remaining;
						continue run;
					}
				}
			});
		return A2(run, $elm$core$Dict$empty, items);
	});
var $elm$regex$Regex$never = _Regex_never;
var $author$project$Cards$Relative = {$: 'Relative'};
var $author$project$Cards$parseAbsOrRel = function (s) {
	switch (s) {
		case '%':
			return $elm$core$Maybe$Just($author$project$Cards$Relative);
		case '':
			return $elm$core$Maybe$Just($author$project$Cards$Absolute);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Cards$Addition = {$: 'Addition'};
var $author$project$Cards$Subtraction = {$: 'Subtraction'};
var $author$project$Cards$parseOperation = function (s) {
	switch (s) {
		case '+':
			return $elm$core$Maybe$Just($author$project$Cards$Addition);
		case '-':
			return $elm$core$Maybe$Just($author$project$Cards$Subtraction);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$toFloat = _String_toFloat;
var $elm$regex$Regex$fromString = function (string) {
	return A2(
		$elm$regex$Regex$fromStringWith,
		{caseInsensitive: false, multiline: false},
		string);
};
var $elm_community$string_extra$String$Extra$regexFromString = A2(
	$elm$core$Basics$composeR,
	$elm$regex$Regex$fromString,
	$elm$core$Maybe$withDefault($elm$regex$Regex$never));
var $elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var $elm_community$string_extra$String$Extra$changeCase = F2(
	function (mutator, word) {
		return A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (_v0) {
					var head = _v0.a;
					var tail = _v0.b;
					return A2(
						$elm$core$String$cons,
						mutator(head),
						tail);
				},
				$elm$core$String$uncons(word)));
	});
var $elm$core$Char$toUpper = _Char_toUpper;
var $elm_community$string_extra$String$Extra$toSentenceCase = function (word) {
	return A2($elm_community$string_extra$String$Extra$changeCase, $elm$core$Char$toUpper, word);
};
var $elm_community$string_extra$String$Extra$toTitleCase = function (ws) {
	var uppercaseMatch = A2(
		$elm$regex$Regex$replace,
		$elm_community$string_extra$String$Extra$regexFromString('\\w+'),
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.match;
			},
			$elm_community$string_extra$String$Extra$toSentenceCase));
	return A3(
		$elm$regex$Regex$replace,
		$elm_community$string_extra$String$Extra$regexFromString('^([a-z])|\\s+([a-z])'),
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.match;
			},
			uppercaseMatch),
		ws);
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$Cards$groupProperties = function (properties) {
	var teamString = 'TEAM EFFECTS ';
	var regexResultToMergeElement = function (strings) {
		_v2$2:
		while (true) {
			if ((strings.b && strings.b.b) && strings.b.b.b) {
				if (!strings.b.b.b.b) {
					var first = strings.a;
					var _v3 = strings.b;
					var second = _v3.a;
					var _v4 = _v3.b;
					var third = _v4.a;
					var _v5 = _Utils_Tuple3(
						$author$project$Cards$parseOperation(first),
						$elm$core$String$toFloat(second),
						third);
					if ((_v5.a.$ === 'Just') && (_v5.b.$ === 'Just')) {
						var op = _v5.a.a;
						var value = _v5.b.a;
						var key = _v5.c;
						return $elm$core$Maybe$Just(
							{absOrRel: $author$project$Cards$Absolute, key: key, operation: op, value: value});
					} else {
						return $elm$core$Maybe$Nothing;
					}
				} else {
					if (!strings.b.b.b.b.b) {
						var first = strings.a;
						var _v6 = strings.b;
						var second = _v6.a;
						var _v7 = _v6.b;
						var third = _v7.a;
						var _v8 = _v7.b;
						var fourth = _v8.a;
						var value = $elm$core$String$toFloat(second);
						var op = $author$project$Cards$parseOperation(first);
						var absOrRel = $author$project$Cards$parseAbsOrRel(third);
						var _v9 = _Utils_Tuple3(op, value, absOrRel);
						if (((_v9.a.$ === 'Just') && (_v9.b.$ === 'Just')) && (_v9.c.$ === 'Just')) {
							var o = _v9.a.a;
							var v = _v9.b.a;
							var a = _v9.c.a;
							return $elm$core$Maybe$Just(
								{absOrRel: a, key: fourth, operation: o, value: v});
						} else {
							return $elm$core$Maybe$Nothing;
						}
					} else {
						break _v2$2;
					}
				}
			} else {
				break _v2$2;
			}
		}
		return $elm$core$Maybe$Nothing;
	};
	var passiveRegex = A2(
		$elm$core$Maybe$withDefault,
		$elm$regex$Regex$never,
		A2(
			$elm$regex$Regex$fromStringWith,
			{caseInsensitive: true, multiline: false},
			'([+,-])(\\d+\\.?\\d*)(\\%?)\\s(.+)'));
	var mergeMergeElements = function (elements) {
		var merger = function (mergeElements) {
			var folder = F2(
				function (next, acc) {
					var _v1 = next.operation;
					if (_v1.$ === 'Addition') {
						return acc + next.value;
					} else {
						return acc - next.value;
					}
				});
			var totalValue = A3($elm$core$List$foldl, folder, 0, mergeElements);
			var first = $elm$core$List$head(mergeElements);
			return A2(
				$elm$core$Maybe$map,
				function (f) {
					return _Utils_update(
						f,
						{value: totalValue});
				},
				first);
		};
		var grouped = A2(
			$author$project$List$Extras$groupBy,
			function (e) {
				return _Utils_Tuple2(
					e.key,
					$author$project$Cards$absOrRelToString(e.absOrRel));
			},
			elements);
		return A2(
			$elm$core$List$map,
			function (element) {
				var val = (element.value > 0) ? ('+' + $elm$core$String$fromFloat(element.value)) : $elm$core$String$fromFloat(element.value);
				return _Utils_ap(
					val,
					_Utils_ap(
						_Utils_eq(element.absOrRel, $author$project$Cards$Absolute) ? ' ' : '% ',
						$elm_community$string_extra$String$Extra$toTitleCase(element.key)));
			},
			A2(
				$elm$core$List$filter,
				function (value) {
					return !(!value.value);
				},
				$elm_community$maybe_extra$Maybe$Extra$values(
					$elm$core$Dict$values(
						A2(
							$elm$core$Dict$map,
							F2(
								function (_v0, value) {
									return merger(value);
								}),
							grouped)))));
	};
	var disableString = 'DISABLES: ';
	var descriptions = A2(
		$elm$core$List$map,
		function (p) {
			return p.description;
		},
		properties);
	var disables = A2(
		$elm$core$List$map,
		function (d) {
			return A2(
				$elm$core$String$dropLeft,
				$elm$core$String$length(disableString),
				d);
		},
		A2(
			$elm$core$List$filter,
			function (d) {
				return A2($elm$core$String$startsWith, disableString, d);
			},
			descriptions));
	var rawPassives = A2(
		$elm$core$List$map,
		function (matches) {
			return $elm$core$List$concat(
				A2(
					$elm$core$List$map,
					function (m) {
						return $elm_community$maybe_extra$Maybe$Extra$values(m.submatches);
					},
					matches));
		},
		A2(
			$elm$core$List$map,
			$elm$regex$Regex$find(passiveRegex),
			descriptions));
	var passives = mergeMergeElements(
		$elm_community$maybe_extra$Maybe$Extra$values(
			A2($elm$core$List$map, regexResultToMergeElement, rawPassives)));
	var remaining = A2(
		$elm$core$List$filter,
		function (d) {
			return A3(
				$elm$core$Basics$composeL,
				$elm$core$Basics$not,
				$elm$regex$Regex$contains(passiveRegex),
				d) && (A3(
				$elm$core$Basics$composeL,
				$elm$core$Basics$not,
				$elm$core$String$startsWith(teamString),
				d) && A3(
				$elm$core$Basics$composeL,
				$elm$core$Basics$not,
				$elm$core$String$startsWith(disableString),
				d));
		},
		A2(
			$elm$core$List$filter,
			A2(
				$elm$core$Basics$composeL,
				$elm$core$Basics$not,
				$elm$regex$Regex$contains(passiveRegex)),
			descriptions));
	var teams = A2(
		$elm$core$List$map,
		function (d) {
			return A2(
				$elm$core$String$dropLeft,
				$elm$core$String$length(teamString),
				d);
		},
		A2(
			$elm$core$List$filter,
			function (d) {
				return A2($elm$core$String$startsWith, teamString, d);
			},
			descriptions));
	return {disables: disables, passives: passives, remaining: remaining, team: teams};
};
var $author$project$Main$inventorySummaryView = function (cards) {
	var orEmptyElement = F2(
		function (hasElement, element) {
			return hasElement ? element : A2($elm$html$Html$div, _List_Nil, _List_Nil);
		});
	var mergedProperties = $author$project$Cards$groupProperties(
		$elm$core$List$concat(
			A2(
				$elm$core$List$map,
				function (c) {
					return c.properties;
				},
				cards)));
	var hasTeam = A3($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty, mergedProperties.team);
	var hasRemaining = A3($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty, mergedProperties.remaining);
	var hasPassives = A3($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty, mergedProperties.passives);
	var hasDisables = A3($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty, mergedProperties.disables);
	var cardWithListContentAndHeader = F2(
		function (header, items) {
			return $rundis$elm_bootstrap$Bootstrap$Card$view(
				A3(
					$rundis$elm_bootstrap$Bootstrap$Card$block,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
							A2(
								$elm$html$Html$ul,
								_List_Nil,
								A2(
									$elm$core$List$map,
									function (i) {
										return A2(
											$elm$html$Html$li,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text(i)
												]));
									},
									items)))
						]),
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$header,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(header)
							]),
						$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))));
		});
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Grid$col,
		_List_fromArray(
			[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs12]),
		_List_fromArray(
			[
				A2(
				orEmptyElement,
				hasPassives,
				A2(cardWithListContentAndHeader, 'Passive Effects', mergedProperties.passives)),
				A2(
				orEmptyElement,
				hasRemaining,
				A2(cardWithListContentAndHeader, 'Other Effects', mergedProperties.remaining)),
				A2(
				orEmptyElement,
				hasTeam,
				A2(cardWithListContentAndHeader, 'Team Effects', mergedProperties.team)),
				A2(
				orEmptyElement,
				hasDisables,
				A2(cardWithListContentAndHeader, 'Disables', mergedProperties.disables))
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb3 = $elm$html$Html$Attributes$class('mb-3');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml2 = $elm$html$Html$Attributes$class('ml-2');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Display$none = $elm$html$Html$Attributes$class('d-none');
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Success = {$: 'Success'};
var $rundis$elm_bootstrap$Bootstrap$Alert$role = F2(
	function (role_, _v0) {
		var configRec = _v0.a;
		return $rundis$elm_bootstrap$Bootstrap$Alert$Config(
			_Utils_update(
				configRec,
				{role: role_}));
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$success = function (conf) {
	return A2($rundis$elm_bootstrap$Bootstrap$Alert$role, $rundis$elm_bootstrap$Bootstrap$Internal$Role$Success, conf);
};
var $author$project$Main$DeselectCard = function (a) {
	return {$: 'DeselectCard', a: a};
};
var $author$project$Main$MoveCardDown = function (a) {
	return {$: 'MoveCardDown', a: a};
};
var $author$project$Main$MoveCardUp = function (a) {
	return {$: 'MoveCardUp', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$m2 = $elm$html$Html$Attributes$class('m-2');
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$Coloring = function (a) {
	return {$: 'Coloring', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$Outlined = function (a) {
	return {$: 'Outlined', a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary = $rundis$elm_bootstrap$Bootstrap$Card$Internal$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Card$Internal$Outlined($rundis$elm_bootstrap$Bootstrap$Internal$Role$Secondary));
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pb1 = $elm$html$Html$Attributes$class('pb-1');
var $author$project$Main$pointerClass = $elm$html$Html$Attributes$class('pointer');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pt1 = $elm$html$Html$Attributes$class('pt-1');
var $rundis$elm_bootstrap$Bootstrap$Card$Block$text = F2(
	function (attributes, children) {
		return $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockItem(
			A2(
				$elm$html$Html$p,
				_Utils_ap(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('card-text')
						]),
					attributes),
				children));
	});
var $author$project$Main$summaryCardView = F2(
	function (optionalIndex, card) {
		var index = function () {
			if (optionalIndex.$ === 'Just') {
				var i = optionalIndex.a;
				return $elm$core$String$fromInt(i) + '. ';
			} else {
				return '';
			}
		}();
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs12]),
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$footer,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pt1, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pb1]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$ul,
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pl3, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pr0]),
								A2(
									$elm$core$List$map,
									function (property) {
										return A2(
											$elm$html$Html$div,
											_List_Nil,
											_List_fromArray(
												[
													A2(
													$elm$html$Html$li,
													_List_Nil,
													_List_fromArray(
														[
															A2(
															$elm$html$Html$small,
															_List_Nil,
															_List_fromArray(
																[
																	$elm$html$Html$text(property.description)
																]))
														]))
												]));
									},
									card.properties))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$block,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$Block$attrs(
									_List_fromArray(
										[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pt1, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pb1]))
								]),
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
									_List_fromArray(
										[$rundis$elm_bootstrap$Bootstrap$Utilities$Flex$block, $rundis$elm_bootstrap$Bootstrap$Utilities$Flex$justifyBetween]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$div,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text(
													_Utils_ap(index, card.title))
												])),
											A2(
											$elm$html$Html$div,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$class('unselectable')
												]),
											_List_fromArray(
												[
													A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Events$onClick(
															$author$project$Main$MoveCardUp(card.id)),
															$author$project$Main$pointerClass,
															$elm$html$Html$Attributes$class('pl-2 pr-2')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text('↑')
														])),
													A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Events$onClick(
															$author$project$Main$MoveCardDown(card.id)),
															$author$project$Main$pointerClass,
															$elm$html$Html$Attributes$class('pl-2 pr-2 ml-2')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text('↓')
														])),
													A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Events$onClick(
															$author$project$Main$DeselectCard(card.id)),
															$author$project$Main$pointerClass,
															$elm$html$Html$Attributes$class('pl-2 pr-0 ml-2 mr-0')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text('✕')
														]))
												]))
										]))
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[
										$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary,
										$rundis$elm_bootstrap$Bootstrap$Card$attrs(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$m2]))
									])))))
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$StartClose = {$: 'StartClose'};
var $rundis$elm_bootstrap$Bootstrap$Alert$clickHandler = F2(
	function (visibility, configRec) {
		var handleClick = F2(
			function (viz, toMsg) {
				return $elm$html$Html$Events$onClick(
					toMsg(viz));
			});
		var _v0 = configRec.dismissable;
		if (_v0.$ === 'Just') {
			var dismissMsg = _v0.a;
			return _List_fromArray(
				[
					configRec.withAnimation ? A2(handleClick, $rundis$elm_bootstrap$Bootstrap$Alert$StartClose, dismissMsg) : A2(handleClick, $rundis$elm_bootstrap$Bootstrap$Alert$Closed, dismissMsg)
				]);
		} else {
			return _List_Nil;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$injectButton = F2(
	function (btn, children_) {
		if (children_.b) {
			var head = children_.a;
			var tail = children_.b;
			return A2(
				$elm$core$List$cons,
				head,
				A2($elm$core$List$cons, btn, tail));
		} else {
			return _List_fromArray(
				[btn]);
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$isDismissable = function (configRec) {
	var _v0 = configRec.dismissable;
	if (_v0.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $rundis$elm_bootstrap$Bootstrap$Alert$maybeAddDismissButton = F3(
	function (visibilty, configRec, children_) {
		return $rundis$elm_bootstrap$Bootstrap$Alert$isDismissable(configRec) ? A2(
			$rundis$elm_bootstrap$Bootstrap$Alert$injectButton,
			A2(
				$elm$html$Html$button,
				_Utils_ap(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('button'),
							$elm$html$Html$Attributes$class('close'),
							A2($elm$html$Html$Attributes$attribute, 'aria-label', 'close')
						]),
					A2($rundis$elm_bootstrap$Bootstrap$Alert$clickHandler, visibilty, configRec)),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$attribute, 'aria-hidden', 'true')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('×')
							]))
					])),
			children_) : children_;
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$viewAttributes = F2(
	function (visibility, configRec) {
		var visibiltyAttributes = _Utils_eq(visibility, $rundis$elm_bootstrap$Bootstrap$Alert$Closed) ? _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'display', 'none')
			]) : _List_Nil;
		var animationAttributes = function () {
			if (configRec.withAnimation) {
				var _v0 = configRec.dismissable;
				if (_v0.$ === 'Just') {
					var dismissMsg = _v0.a;
					return _List_fromArray(
						[
							A2(
							$elm$html$Html$Events$on,
							'transitionend',
							$elm$json$Json$Decode$succeed(
								dismissMsg($rundis$elm_bootstrap$Bootstrap$Alert$Closed)))
						]);
				} else {
					return _List_Nil;
				}
			} else {
				return _List_Nil;
			}
		}();
		var alertAttributes = _List_fromArray(
			[
				A2($elm$html$Html$Attributes$attribute, 'role', 'alert'),
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('alert', true),
						_Utils_Tuple2(
						'alert-dismissible',
						$rundis$elm_bootstrap$Bootstrap$Alert$isDismissable(configRec)),
						_Utils_Tuple2('fade', configRec.withAnimation),
						_Utils_Tuple2(
						'show',
						_Utils_eq(visibility, $rundis$elm_bootstrap$Bootstrap$Alert$Shown))
					])),
				A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'alert', configRec.role)
			]);
		return $elm$core$List$concat(
			_List_fromArray(
				[configRec.attributes, alertAttributes, visibiltyAttributes, animationAttributes]));
	});
var $rundis$elm_bootstrap$Bootstrap$Alert$view = F2(
	function (visibility, _v0) {
		var configRec = _v0.a;
		return A2(
			$elm$html$Html$div,
			A2($rundis$elm_bootstrap$Bootstrap$Alert$viewAttributes, visibility, configRec),
			A3($rundis$elm_bootstrap$Bootstrap$Alert$maybeAddDismissButton, visibility, configRec, configRec.children));
	});
var $author$project$Main$inventoryContentView = function (model) {
	var summaryAlertContent = _List_fromArray(
		[
			$elm$html$Html$text('Click the list icon above to switch to '),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('success-alert-link'),
					$elm$html$Html$Attributes$href('#'),
					$elm$html$Html$Events$onClick(
					A2($author$project$Main$ChangeInventoryDisplayType, true, $author$project$Main$InventoryAsSummary))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('summarized view')
				])),
			$elm$html$Html$text('.')
		]);
	var returnAlertContent = _List_fromArray(
		[
			$elm$html$Html$text('Return to '),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('success-alert-link'),
					$elm$html$Html$Attributes$href('#'),
					$elm$html$Html$Events$onClick(
					A2($author$project$Main$ChangeInventoryDisplayType, false, $author$project$Main$InventoryAsCards))
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('previous view')
				])),
			$elm$html$Html$text('.')
		]);
	var emptyDeckHint = _List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs12]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb3,
							$elm$html$Html$Attributes$class('italic text-center')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('no cards selected')
						]))
				]))
		]);
	var asSummaryView = function (cards) {
		return $elm$core$List$isEmpty(cards) ? emptyDeckHint : _List_fromArray(
			[
				$author$project$Main$inventorySummaryView(model.selectedCards),
				$author$project$Main$inventoryProgressView(model.selectedCards)
			]);
	};
	var asCardsView = function (cards) {
		return $elm$core$List$isEmpty(cards) ? emptyDeckHint : A2(
			$elm$core$List$indexedMap,
			F2(
				function (i, c) {
					return A2(
						$author$project$Main$summaryCardView,
						$elm$core$Maybe$Just(i + 1),
						c);
				}),
			cards);
	};
	var alert = F2(
		function (visibility, children) {
			return _Utils_eq(visibility, $rundis$elm_bootstrap$Bootstrap$Alert$closed) ? A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$col,
				_List_fromArray(
					[
						$rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs(
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Display$none]))
					]),
				_List_Nil) : A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$col,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml2, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mr2, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt2]),
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Alert$view,
								visibility,
								A2(
									$rundis$elm_bootstrap$Bootstrap$Alert$children,
									children,
									A2(
										$rundis$elm_bootstrap$Bootstrap$Alert$dismissableWithAnimation,
										$author$project$Main$ToggleSummarizeViewHint,
										$rundis$elm_bootstrap$Bootstrap$Alert$success($rundis$elm_bootstrap$Bootstrap$Alert$config))))
							]))
					]));
		});
	var _v0 = model.inventoryDisplay;
	if (_v0.$ === 'InventoryAsCards') {
		return A2(
			$elm$core$List$cons,
			A2(alert, model.summarizeViewHintVisibility, summaryAlertContent),
			asCardsView(model.selectedCards));
	} else {
		return A2(
			$elm$core$List$cons,
			A2(alert, model.returnViewHintVisibility, returnAlertContent),
			asSummaryView(model.selectedCards));
	}
};
var $author$project$Main$ConfirmResetModal = {$: 'ConfirmResetModal'};
var $author$project$Main$RejectResetModal = {$: 'RejectResetModal'};
var $author$project$Main$ShowShareModal = {$: 'ShowShareModal'};
var $author$project$Main$ShowYesNoModal = function (a) {
	return {$: 'ShowYesNoModal', a: a};
};
var $author$project$Main$inventoryStyleToggle = F2(
	function (inventoryDisplay, extraClasses) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButtonGroup,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$ButtonGroup$small,
					$rundis$elm_bootstrap$Bootstrap$ButtonGroup$attrs(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('d-flex align-items-center ' + extraClasses),
							$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml3
						]))
				]),
			_List_fromArray(
				[
					A3(
					$rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButton,
					_Utils_eq(inventoryDisplay, $author$project$Main$InventoryAsCards),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Button$secondary,
							$rundis$elm_bootstrap$Bootstrap$Button$onClick(
							A2($author$project$Main$ChangeInventoryDisplayType, false, $author$project$Main$InventoryAsCards))
						]),
					_List_fromArray(
						[
							$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$layerGroup)
						])),
					A3(
					$rundis$elm_bootstrap$Bootstrap$ButtonGroup$radioButton,
					_Utils_eq(inventoryDisplay, $author$project$Main$InventoryAsSummary),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Button$secondary,
							$rundis$elm_bootstrap$Bootstrap$Button$onClick(
							A2($author$project$Main$ChangeInventoryDisplayType, false, $author$project$Main$InventoryAsSummary))
						]),
					_List_fromArray(
						[
							$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$list)
						]))
				]));
	});
var $author$project$Main$maxDeckSize = 15;
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb0 = $elm$html$Html$Attributes$class('mb-0');
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Warning = {$: 'Warning'};
var $rundis$elm_bootstrap$Bootstrap$Button$warning = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled($rundis$elm_bootstrap$Bootstrap$Internal$Button$Warning));
var $author$project$Main$inventoryHeaderView = F2(
	function (numberOfSelectedCards, display) {
		var yesNoContent = {header: 'Reset', noMsg: $author$project$Main$RejectResetModal, text: 'Clear the currently selected cards?', yesMsg: $author$project$Main$ConfirmResetModal};
		var textColor = (_Utils_cmp(numberOfSelectedCards, $author$project$Main$maxDeckSize) < 1) ? $elm$html$Html$Attributes$class('') : $elm$html$Html$Attributes$class('text-warning');
		var styleSelector = $author$project$Main$inventoryStyleToggle(display);
		var spacing = function () {
			if (display.$ === 'InventoryAsCards') {
				return $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml2;
			} else {
				return $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml4;
			}
		}();
		var selectionCountString = '(' + ($elm$core$String$fromInt(numberOfSelectedCards) + ('/' + ($elm$core$String$fromInt($author$project$Main$maxDeckSize) + ')')));
		var buttons = A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('d-flex')
				]),
			_List_fromArray(
				[
					styleSelector('mr-3'),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Button$button,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Button$secondary,
							$rundis$elm_bootstrap$Bootstrap$Button$small,
							$rundis$elm_bootstrap$Bootstrap$Button$onClick($author$project$Main$ShowShareModal)
						]),
					_List_fromArray(
						[
							$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$share)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Button$button,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Button$warning,
							$rundis$elm_bootstrap$Bootstrap$Button$small,
							$rundis$elm_bootstrap$Bootstrap$Button$onClick(
							$author$project$Main$ShowYesNoModal(yesNoContent)),
							$rundis$elm_bootstrap$Bootstrap$Button$attrs(
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$ml3]))
						]),
					_List_fromArray(
						[
							$lattyware$elm_fontawesome$FontAwesome$Icon$viewIcon($lattyware$elm_fontawesome$FontAwesome$Solid$times)
						]))
				]));
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('pr-1 pt-1 pb-1')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs12,
							$rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('d-flex justify-content-between align-items-center')
								]))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h5,
							_List_fromArray(
								[spacing, $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb0, textColor]),
							_List_fromArray(
								[
									$elm$html$Html$text(selectionCountString)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$m2, textColor]),
							_List_fromArray(
								[buttons]))
						]))
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col4 = {$: 'Col4'};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$lg4 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, $rundis$elm_bootstrap$Bootstrap$General$Internal$LG, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col4);
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Warning = {$: 'Warning'};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Border$warning = A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'border', $rundis$elm_bootstrap$Bootstrap$Internal$Role$Warning);
var $author$project$Main$inventoryView = function (model) {
	var numberOfSelectedCards = $elm$core$List$length(model.selectedCards);
	var border = (_Utils_cmp(numberOfSelectedCards, $author$project$Main$maxDeckSize) < 1) ? $rundis$elm_bootstrap$Bootstrap$Utilities$Border$dark : $rundis$elm_bootstrap$Bootstrap$Utilities$Border$warning;
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Grid$col,
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs12,
				$rundis$elm_bootstrap$Bootstrap$Grid$Col$md6,
				$rundis$elm_bootstrap$Bootstrap$Grid$Col$lg4,
				$rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('right-column'),
						$elm$html$Html$Attributes$class('overflow-scroll content-column')
					]))
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('bg-dark mt-2 mb-2 shadow rounded border'),
						border
					]),
				_List_fromArray(
					[
						A2($author$project$Main$inventoryHeaderView, numberOfSelectedCards, model.inventoryDisplay),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Grid$row,
						_List_Nil,
						$author$project$Main$inventoryContentView(model))
					]))
			]));
};
var $lattyware$elm_fontawesome$FontAwesome$Solid$arrowUp = A5(
	$lattyware$elm_fontawesome$FontAwesome$Icon$Icon,
	'fas',
	'arrow-up',
	448,
	512,
	_List_fromArray(
		['M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z']));
var $author$project$Main$scrollToTopToggleButton = function () {
	var icon = $lattyware$elm_fontawesome$FontAwesome$Icon$view(
		A2(
			$lattyware$elm_fontawesome$FontAwesome$Icon$styled,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', '0.5em'),
					A2($elm$html$Html$Attributes$style, 'height', '0.5em'),
					A2($elm$html$Html$Attributes$style, 'vertical-align', '0.18em')
				]),
			$lattyware$elm_fontawesome$FontAwesome$Icon$present($lattyware$elm_fontawesome$FontAwesome$Solid$arrowUp)));
	return A2(
		$elm$html$Html$a,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$id('scroll-to-top-toggle-button'),
				$elm$html$Html$Attributes$class('action-button-left action-button-1 btn btn-light d-none pointer')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h2,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('m-auto grey no-decoration')
					]),
				_List_fromArray(
					[icon]))
			]));
}();
var $author$project$Main$CopyShareUrl = function (a) {
	return {$: 'CopyShareUrl', a: a};
};
var $author$project$Main$HideShareModal = {$: 'HideShareModal'};
var $author$project$Main$shareModal = function (model) {
	var modalShareUrl = $elm$url$Url$toString(
		$author$project$Main$shareUrl(model));
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Modal$view,
		model.shareModalVisibility,
		A3(
			$rundis$elm_bootstrap$Bootstrap$Modal$footer,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Button$button,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Button$outlinePrimary,
							$rundis$elm_bootstrap$Bootstrap$Button$attrs(
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Main$HideShareModal)
								]))
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Close')
						]))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Modal$body,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$view(
								A2(
									$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$successors,
									_List_fromArray(
										[
											A2(
											$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$button,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Button$secondary,
													$rundis$elm_bootstrap$Bootstrap$Button$small,
													$rundis$elm_bootstrap$Bootstrap$Button$onClick(
													$author$project$Main$CopyShareUrl(modalShareUrl))
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('📋')
												]))
										]),
									$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$config(
										$rundis$elm_bootstrap$Bootstrap$Form$InputGroup$text(
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Form$Input$attrs(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$readonly(true),
															$elm$html$Html$Attributes$value(modalShareUrl)
														]))
												])))))
							]))
					]),
				A3(
					$rundis$elm_bootstrap$Bootstrap$Modal$h3,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Share build')
						]),
					A2(
						$rundis$elm_bootstrap$Bootstrap$Modal$hideOnBackdropClick,
						true,
						$rundis$elm_bootstrap$Bootstrap$Modal$large(
							$rundis$elm_bootstrap$Bootstrap$Modal$config($author$project$Main$HideShareModal)))))));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Danger = {$: 'Danger'};
var $rundis$elm_bootstrap$Bootstrap$Button$outlineDanger = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Outlined($rundis$elm_bootstrap$Bootstrap$Internal$Button$Danger));
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Success = {$: 'Success'};
var $rundis$elm_bootstrap$Bootstrap$Button$outlineSuccess = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Outlined($rundis$elm_bootstrap$Bootstrap$Internal$Button$Success));
var $rundis$elm_bootstrap$Bootstrap$Modal$small = function (_v0) {
	var conf = _v0.a;
	var options = conf.options;
	return $rundis$elm_bootstrap$Bootstrap$Modal$Config(
		_Utils_update(
			conf,
			{
				options: _Utils_update(
					options,
					{
						modalSize: $elm$core$Maybe$Just($rundis$elm_bootstrap$Bootstrap$General$Internal$SM)
					})
			}));
};
var $author$project$Main$yesNoModal = F2(
	function (visibility, content) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Modal$view,
			visibility,
			A3(
				$rundis$elm_bootstrap$Bootstrap$Modal$footer,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Button$button,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Button$outlineSuccess,
								$rundis$elm_bootstrap$Bootstrap$Button$attrs(
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(content.yesMsg)
									]))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Yes')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Button$button,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Button$outlineDanger,
								$rundis$elm_bootstrap$Bootstrap$Button$attrs(
								_List_fromArray(
									[
										$elm$html$Html$Events$onClick(content.noMsg)
									]))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('No')
							]))
					]),
				A3(
					$rundis$elm_bootstrap$Bootstrap$Modal$body,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(content.text)
								]))
						]),
					A3(
						$rundis$elm_bootstrap$Bootstrap$Modal$h3,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(content.header)
							]),
						A2(
							$rundis$elm_bootstrap$Bootstrap$Modal$hideOnBackdropClick,
							false,
							$rundis$elm_bootstrap$Bootstrap$Modal$small(
								$rundis$elm_bootstrap$Bootstrap$Modal$config(content.noMsg)))))));
	});
var $author$project$Main$mainContent = function (model) {
	var resetModal = A2(
		$elm$core$Maybe$withDefault,
		A2($elm$html$Html$div, _List_Nil, _List_Nil),
		A2(
			$elm$core$Maybe$map,
			function (c) {
				return A2($author$project$Main$yesNoModal, model.yesNoModalVisibility, c);
			},
			model.yesNoModalContent));
	return _List_fromArray(
		[
			$author$project$Main$shareModal(model),
			resetModal,
			$author$project$Main$helpModal(model.helpModalVisibility),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					$author$project$Main$cardPoolView(model),
					$author$project$Main$inventoryView(model)
				])),
			$author$project$Main$inventoryToggleButton(
			$elm$core$List$length(model.selectedCards)),
			$author$project$Main$scrollToTopToggleButton,
			$author$project$Main$helpActionButton
		]);
};
var $author$project$Main$view = function (model) {
	return {
		body: _List_fromArray(
			[
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$containerFluid,
				_List_Nil,
				$author$project$Main$mainContent(model))
			]),
		title: 'Back 4 Blood Deck Builder'
	};
};
var $author$project$Main$main = $elm$browser$Browser$application(
	{init: $author$project$Main$init, onUrlChange: $author$project$Main$UrlChanged, onUrlRequest: $author$project$Main$LinkClicked, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (windowWidth) {
			return $elm$json$Json$Decode$succeed(
				{windowWidth: windowWidth});
		},
		A2($elm$json$Json$Decode$field, 'windowWidth', $elm$json$Json$Decode$int)))(0)}});}(this));