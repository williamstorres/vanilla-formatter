const vanillaFormatter = {
  greet() {
    return 'hello';
  },
  translation: {
    '0': {pattern: /\d/},
    '9': {pattern: /\d/, optional: true},
    '#': {pattern: /\d/, recursive: true},
    'A': {pattern: /[a-zA-Z0-9]/},
    'S': {pattern: /[a-zA-Z]/}
  },
  p: {
    invalid: [],
    getCaret: function () {
      try {
        var sel,
          pos = 0,
          ctrl = el.get(0),
          dSel = document.selection,
          cSelStart = ctrl.selectionStart;

        // IE Support
        if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
          sel = dSel.createRange();
          sel.moveStart('character', -p.val().length);
          pos = sel.text.length;
        }
        // Firefox support
        else if (cSelStart || cSelStart === '0') {
          pos = cSelStart;
        }

        return pos;
      } catch (e) {
      }
    }
  },
  format(value, format, reverse){
    return this.getMasked(false, value, format, {reverse: reverse});
  },
  getClean(value, format, reverse){
    return this.getMasked(true, value, format, {reverse: reverse});
  },
  getMasked(skipMaskChars, val, mask, options) {
    var buf = [],
      value = val === undefined ? p.val() : val + '',
      m = 0, maskLen = mask.length,
      v = 0, valLen = value.length,
      offset = 1, addMethod = 'push',
      resetPos = -1,
      lastMaskChar,
      check;

    if (options.reverse) {
      addMethod = 'unshift';
      offset = -1;
      lastMaskChar = 0;
      m = maskLen - 1;
      v = valLen - 1;
      check = function () {
        return m > -1 && v > -1;
      };
    } else {
      lastMaskChar = maskLen - 1;
      check = function () {
        return m < maskLen && v < valLen;
      };
    }

    while (check()) {
      var maskDigit = mask.charAt(m),
        valDigit = value.charAt(v),
        translation = this.translation[maskDigit];

      if (translation) {
        if (valDigit.match(translation.pattern)) {
          buf[addMethod](valDigit);
          if (translation.recursive) {
            if (resetPos === -1) {
              resetPos = m;
            } else if (m === lastMaskChar) {
              m = resetPos - offset;
            }

            if (lastMaskChar === resetPos) {
              m -= offset;
            }
          }
          m += offset;
        } else if (translation.optional) {
          m += offset;
          v -= offset;
        } else if (translation.fallback) {
          buf[addMethod](translation.fallback);
          m += offset;
          v -= offset;
        } else {
          this.p.invalid.push({p: v, v: valDigit, e: translation.pattern});
        }
        v += offset;
      } else {
        if (!skipMaskChars) {
          buf[addMethod](maskDigit);
        }

        if (valDigit === maskDigit) {
          v += offset;
        }

        m += offset;
      }
    }

    var lastMaskCharDigit = mask.charAt(lastMaskChar);
    if (maskLen === valLen + 1 && !this.translation[lastMaskCharDigit]) {
      buf.push(lastMaskCharDigit);
    }

    return buf.join('');
  },
};

export default vanillaFormatter;
