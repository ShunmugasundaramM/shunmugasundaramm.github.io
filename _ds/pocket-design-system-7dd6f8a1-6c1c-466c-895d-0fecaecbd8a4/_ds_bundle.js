/* @ds-bundle: {"format":4,"namespace":"PocketDesignSystem_7dd6f8","components":[{"name":"AppIcon","sourcePath":"components/brand/AppIcon.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ChangeBadge","sourcePath":"components/data/ChangeBadge.jsx"},{"name":"Price","sourcePath":"components/data/Price.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"TickerRow","sourcePath":"components/data/TickerRow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"BottomSheet","sourcePath":"components/surfaces/BottomSheet.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Tag","sourcePath":"components/surfaces/Tag.jsx"},{"name":"Keypad","sourcePath":"components/trade/Keypad.jsx"},{"name":"SwipeToConfirm","sourcePath":"components/trade/SwipeToConfirm.jsx"}],"sourceHashes":{"components/brand/AppIcon.jsx":"12cf2c031c53","components/brand/Icon.jsx":"091d491e9e0f","components/brand/Wordmark.jsx":"0415649be497","components/core/Button.jsx":"b642139cdc35","components/core/IconButton.jsx":"da0f1c6a7190","components/data/ChangeBadge.jsx":"8bd6039da49b","components/data/Price.jsx":"77b9b81d39ab","components/data/Sparkline.jsx":"cc7ef471101a","components/data/TickerRow.jsx":"f981088e93ef","components/forms/Input.jsx":"ed5cb30407ca","components/forms/SegmentedControl.jsx":"29302882d650","components/forms/Switch.jsx":"b152c5f7b830","components/surfaces/BottomSheet.jsx":"3fef1bdd45aa","components/surfaces/Card.jsx":"e57d14424899","components/surfaces/Tag.jsx":"aaabbabb85c7","components/trade/Keypad.jsx":"b6bd366ded6e","components/trade/SwipeToConfirm.jsx":"fd3272ca8ad6","ui_kits/app/Home.jsx":"9e30fdb9e722","ui_kits/app/TradeSheet.jsx":"09f72b7d58f4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PocketDesignSystem_7dd6f8 = window.PocketDesignSystem_7dd6f8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AppIcon.jsx
try { (() => {
const V = {
  ink: ['var(--pk-ink-950)', 'var(--pk-white)', 'var(--pk-lime-400)'],
  lime: ['var(--pk-lime-400)', 'var(--pk-ink-950)', 'var(--pk-ink-950)'],
  paper: ['var(--pk-white)', 'var(--pk-ink-950)', 'var(--pk-lime-400)']
};
function AppIcon({
  size = 64,
  variant = 'ink',
  bordered = false
}) {
  const [bg, ring, dot] = V[variant] || V.ink;
  const r = size * 0.59,
    stroke = Math.max(1.5, size * 0.125),
    d = size * 0.16;
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Pocket",
    style: {
      width: size,
      height: size,
      borderRadius: size * 0.227,
      background: bg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: bordered ? 'inset 0 0 0 1px var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      boxSizing: 'border-box',
      width: r,
      height: r,
      border: stroke + 'px solid ' + ring,
      borderRadius: '50%'
    }
  }, size >= 24 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      margin: 'auto',
      width: d,
      height: d,
      borderRadius: '50%',
      background: dot
    }
  }) : null));
}
Object.assign(__ds_scope, { AppIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AppIcon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  base = 'assets/icons/',
  label
}) {
  const url = 'url(' + base + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      width: size,
      height: size,
      background: color,
      WebkitMask: url + ' center/contain no-repeat',
      mask: url + ' center/contain no-repeat'
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 32,
  theme = 'dark',
  dot = true,
  style
}) {
  const ink = theme === 'light' ? 'var(--pk-ink-950)' : 'var(--pk-white)';
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Pocket",
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      fontFamily: 'var(--font-wordmark)',
      fontWeight: 900,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: ink,
      ...style
    }
  }, "P", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      position: 'relative',
      boxSizing: 'border-box',
      width: '0.75em',
      height: '0.745em',
      margin: '0 0.015em -0.01em',
      border: '0.19em solid currentColor',
      borderRadius: '50%'
    }
  }, dot && size >= 24 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      margin: 'auto',
      width: '0.17em',
      height: '0.17em',
      borderRadius: '50%',
      background: 'var(--pk-lime-400)'
    }
  }) : null), "CKET");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const H = {
  lg: 52,
  md: 44,
  sm: 36
};
const FS = {
  lg: 15,
  md: 14,
  sm: 13
};
function Spinner({
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid ' + color,
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'pk-spin .7s linear infinite',
      boxSizing: 'border-box'
    }
  });
}
function Button({
  variant = 'primary',
  size = 'lg',
  loading = false,
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const off = disabled;
  const v = {
    primary: {
      bg: down ? 'var(--accent-pressed)' : hover ? 'var(--accent-hover)' : 'var(--accent)',
      fg: 'var(--text-on-accent)',
      ring: null
    },
    secondary: {
      bg: hover ? 'var(--surface-hover)' : 'var(--surface-2)',
      fg: 'var(--text-primary)',
      ring: 'var(--border-default)'
    },
    ghost: {
      bg: hover ? 'var(--surface-2)' : 'transparent',
      fg: 'var(--text-primary)',
      ring: null
    },
    sell: {
      bg: 'var(--loss)',
      fg: 'var(--on-loss)',
      ring: null
    }
  }[variant] || {};
  const s = off ? {
    bg: 'var(--surface-2)',
    fg: 'var(--text-disabled)',
    ring: null
  } : v;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: off,
    "aria-busy": loading || undefined,
    onClick: off || loading ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      height: H[size],
      padding: '0 ' + (size === 'sm' ? 16 : 24) + 'px',
      width: fullWidth ? '100%' : 'auto',
      borderRadius: 999,
      border: 0,
      boxShadow: s.ring ? 'inset 0 0 0 1px ' + s.ring : 'none',
      background: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: FS[size],
      fontWeight: 700,
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      cursor: off ? 'not-allowed' : loading ? 'progress' : 'pointer',
      transform: down && !off ? 'scale(var(--press-scale))' : 'none',
      transition: 'background var(--dur-fast), transform var(--dur-instant)',
      ...style
    }
  }, loading ? /*#__PURE__*/React.createElement(Spinner, {
    color: s.fg
  }) : iconLeft, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  label,
  children,
  badge = false,
  size = 42,
  variant = 'surface',
  onClick
}) {
  const bg = variant === 'accent' ? 'var(--accent)' : variant === 'ghost' ? 'transparent' : 'var(--surface-1)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: onClick,
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      border: variant === 'surface' ? '1px solid var(--border-default)' : '0',
      color: variant === 'accent' ? 'var(--text-on-accent)' : 'var(--text-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, children, badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: size * 0.2,
      right: size * 0.22,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--accent)',
      boxShadow: '0 0 0 2px var(--surface-1)'
    }
  }) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/ChangeBadge.jsx
try { (() => {
function ChangeBadge({
  value,
  amount,
  currency = '\u20B9',
  size = 'md',
  arrow = true,
  solid = false
}) {
  const flat = value === 0;
  const up = value > 0;
  const sign = flat ? '' : up ? '+' : '\u2212';
  const pct = Math.abs(value).toFixed(2) + '%';
  const amt = amount == null ? null : (amount >= 0 ? '+' : '\u2212') + currency + Math.abs(amount).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const fg = flat ? 'var(--text-secondary)' : up ? 'var(--gain)' : 'var(--loss)';
  const bg = flat ? 'var(--surface-2)' : solid ? fg : up ? 'var(--gain-tint)' : 'var(--loss-tint)';
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: sm ? 22 : 28,
      padding: '0 ' + (sm ? 8 : 10) + 'px',
      borderRadius: 999,
      background: bg,
      color: solid && !flat ? 'var(--pk-ink-950)' : fg,
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: sm ? 11 : 13,
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, arrow && !flat ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, up ? '\u25B2' : '\u25BC') : null, amt ? amt + ' (' + pct + ')' : sign + pct, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)'
    }
  }, flat ? 'unchanged' : up ? 'up' : 'down'));
}
Object.assign(__ds_scope, { ChangeBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChangeBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/Price.jsx
try { (() => {
const SZ = {
  hero: [52, '-0.03em'],
  xl: [34, '-0.02em'],
  lg: [24, '-0.01em'],
  md: [15, 0],
  sm: [12, 0]
};
function Price({
  value,
  currency = 'INR',
  size = 'md',
  flash = null,
  muted = false,
  decimals = 2
}) {
  const [fs, ls] = SZ[size] || SZ.md;
  const text = new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
  const color = flash === 'up' ? 'var(--gain)' : flash === 'down' ? 'var(--loss)' : muted ? 'var(--text-secondary)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: fs,
      letterSpacing: ls,
      fontWeight: 600,
      lineHeight: 1.1,
      color,
      transition: 'color 400ms',
      whiteSpace: 'nowrap'
    }
  }, text);
}
Object.assign(__ds_scope, { Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Price.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function Sparkline({
  data = [],
  width = 64,
  height = 28,
  color,
  strokeWidth = 1.8,
  fill = false
}) {
  if (data.length < 2) return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height
  });
  const mn = Math.min(...data),
    mx = Math.max(...data),
    d = mx - mn || 1,
    p = strokeWidth + 1;
  const pts = data.map((v, i) => [i / (data.length - 1) * width, p + (1 - (v - mn) / d) * (height - 2 * p)]);
  const line = pts.map((q, i) => (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1)).join(' ');
  const c = color || (data[data.length - 1] >= data[0] ? 'var(--gain)' : 'var(--loss)');
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    "aria-hidden": "true",
    style: {
      display: 'block',
      flexShrink: 0
    }
  }, fill ? /*#__PURE__*/React.createElement("path", {
    d: line + ' L' + width + ' ' + height + ' L0 ' + height + ' Z',
    fill: c,
    fillOpacity: "0.08"
  }) : null, /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: c,
    strokeWidth: strokeWidth,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/TickerRow.jsx
try { (() => {
function TickerRow({
  symbol,
  name,
  price,
  change,
  data = [],
  flash = null,
  currency = 'INR',
  onClick,
  divider = true
}) {
  const [down, setDown] = React.useState(false);
  const tint = flash === 'up' ? 'var(--gain-tint)' : flash === 'down' ? 'var(--loss-tint)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onPointerDown: () => setDown(true),
    onPointerUp: () => setDown(false),
    onPointerLeave: () => setDown(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '44px minmax(0,1fr) 72px auto',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      minHeight: 72,
      padding: '14px 0',
      background: down ? 'var(--surface-1)' : 'transparent',
      border: 0,
      borderBottom: divider ? '1px solid var(--border-subtle)' : '0',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      textAlign: 'left',
      cursor: onClick ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: 'var(--surface-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 800
    }
  }, symbol.slice(0, 2)), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, symbol), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name)), /*#__PURE__*/React.createElement(__ds_scope.Sparkline, {
    data: data,
    width: 72,
    height: 28,
    strokeWidth: 1.75,
    color: change >= 0 ? 'var(--gain)' : 'var(--loss)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 6,
      padding: '0 4px',
      margin: '0 -4px',
      background: tint,
      transition: 'background 600ms'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Price, {
    value: price,
    currency: currency
  })), /*#__PURE__*/React.createElement(__ds_scope.ChangeBadge, {
    value: change,
    size: "sm"
  })));
}
Object.assign(__ds_scope, { TickerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TickerRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  prefix,
  hint,
  error,
  mono = false,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const ring = error ? '1.5px var(--loss)' : focus ? '1.5px var(--accent)' : disabled ? '1px var(--border-subtle)' : '1px var(--border-default)';
  const num = mono || !!prefix;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 52,
      boxSizing: 'border-box',
      padding: '0 16px',
      borderRadius: 16,
      background: disabled ? 'var(--surface-1)' : 'var(--surface-2)',
      boxShadow: 'inset 0 0 0 ' + ring,
      transition: 'box-shadow var(--dur-fast)'
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--text-secondary)'
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled,
    "aria-invalid": !!error || undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    inputMode: prefix ? 'decimal' : undefined
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      background: 'transparent',
      border: 0,
      outline: 'none',
      caretColor: 'var(--accent)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      fontFamily: num ? 'var(--font-mono)' : 'var(--font-sans)',
      fontVariantNumeric: 'tabular-nums',
      fontSize: num ? 16 : 15
    }
  }))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--loss)' : 'var(--text-secondary)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  onChange,
  mono = false,
  size = 'md'
}) {
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + options.length + ',1fr)',
      gap: 4,
      padding: 4,
      background: 'var(--surface-1)',
      boxShadow: 'inset 0 0 0 1px var(--border-default)',
      borderRadius: 999
    }
  }, options.map(o => {
    const on = o.value === value;
    const bg = on ? o.tone === 'loss' ? 'var(--loss)' : o.tone === 'neutral' ? 'var(--border-default)' : 'var(--accent)' : 'transparent';
    const fg = on ? o.tone === 'neutral' ? 'var(--text-primary)' : 'var(--text-on-accent)' : 'var(--text-secondary)';
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": on,
      onClick: () => onChange && onChange(o.value),
      style: {
        height: sm ? 32 : 44,
        border: 0,
        borderRadius: 999,
        background: bg,
        color: fg,
        cursor: 'pointer',
        fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
        fontVariantNumeric: 'tabular-nums',
        fontSize: sm ? 12 : 14,
        fontWeight: 700,
        letterSpacing: mono ? '0.06em' : 0,
        transition: 'background var(--dur-base), color var(--dur-base)'
      }
    }, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      minHeight: 44
    }
  }, label, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: 52,
      height: 32,
      borderRadius: 999,
      border: 0,
      padding: 0,
      background: checked ? 'var(--accent)' : 'var(--border-default)',
      cursor: 'inherit',
      transition: 'background var(--dur-base)',
      opacity: disabled ? 0.5 : 1,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: checked ? 'var(--pk-ink-950)' : 'var(--pk-white)',
      transform: checked ? 'translateX(20px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/BottomSheet.jsx
try { (() => {
const EASE = 'cubic-bezier(.2,.8,.2,1)';
function BottomSheet({
  open = false,
  onClose,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: open ? 'auto' : 'none',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim)',
      opacity: open ? 1 : 0,
      transition: 'opacity 320ms ' + EASE
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--surface-1)',
      borderRadius: '28px 28px 0 0',
      padding: '10px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      boxShadow: '0 -24px 60px rgba(0,0,0,.6)',
      transform: open ? 'translateY(0)' : 'translateY(105%)',
      transition: 'transform 320ms ' + EASE
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      alignSelf: 'center',
      width: 36,
      height: 4,
      borderRadius: 2,
      background: 'var(--border-default)',
      border: 0,
      padding: 0,
      cursor: 'pointer'
    }
  }), children));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  padding = 20,
  tone = 'default',
  radius = 28,
  style
}) {
  const t = {
    default: ['var(--surface-1)', 'var(--border-default)', 'var(--text-primary)'],
    raised: ['var(--surface-2)', 'var(--border-default)', 'var(--text-primary)'],
    accent: ['var(--accent)', null, 'var(--text-on-accent)']
  }[tone] || [];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      background: t[0],
      boxShadow: t[1] ? 'inset 0 0 0 1px ' + t[1] : 'none',
      color: t[2],
      borderRadius: radius,
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'neutral',
  live = false
}) {
  const tn = live && tone === 'neutral' ? 'live' : tone;
  const t = {
    live: ['var(--gain-tint)', 'var(--gain)', null],
    outline: ['transparent', 'var(--text-primary)', 'var(--border-default)'],
    accent: ['var(--accent)', 'var(--text-on-accent)', null],
    neutral: ['var(--surface-2)', 'var(--text-secondary)', null]
  }[tn] || [];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 26,
      padding: '0 10px',
      borderRadius: 999,
      background: t[0],
      color: t[1],
      boxShadow: t[2] ? 'inset 0 0 0 1px ' + t[2] : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, tn === 'live' ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--gain)',
      animation: 'pk-pulse 1.6s ease-in-out infinite'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tag.jsx", error: String((e && e.message) || e) }); }

// components/trade/Keypad.jsx
try { (() => {
const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del'];
function Keypad({
  onKey,
  decimal = true
}) {
  const [down, setDown] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 4
    }
  }, KEYS.map(k => {
    const hidden = k === '.' && !decimal;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      "aria-label": k === 'del' ? 'Delete' : k,
      disabled: hidden,
      onClick: () => onKey && onKey(k),
      onPointerDown: () => setDown(k),
      onPointerUp: () => setDown(null),
      onPointerLeave: () => setDown(null),
      style: {
        height: 54,
        border: 0,
        borderRadius: 14,
        background: down === k ? 'var(--surface-2)' : 'transparent',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-mono)',
        fontSize: 26,
        fontWeight: 500,
        cursor: 'pointer',
        visibility: hidden ? 'hidden' : 'visible'
      }
    }, k === 'del' ? '\u232B' : k);
  }));
}
Object.assign(__ds_scope, { Keypad });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trade/Keypad.jsx", error: String((e && e.message) || e) }); }

// components/trade/SwipeToConfirm.jsx
try { (() => {
function SwipeToConfirm({
  label = 'Swipe to confirm',
  doneLabel = 'Order placed',
  side = 'buy',
  disabled = false,
  onConfirm
}) {
  const track = React.useRef(null);
  const [x, setX] = React.useState(0);
  const [drag, setDrag] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const start = React.useRef(0);
  const max = () => track.current ? track.current.clientWidth - 60 : 280;
  const c = side === 'sell' ? 'var(--loss)' : 'var(--accent)';
  const glow = side === 'sell' ? 'rgba(255,59,48,.22)' : 'rgba(200,255,0,.22)';
  React.useEffect(() => {
    if (disabled) {
      setX(0);
      setDone(false);
    }
  }, [disabled]);
  const commit = () => {
    setX(max());
    setDone(true);
    if (navigator.vibrate) navigator.vibrate(15);
    onConfirm && setTimeout(onConfirm, 180);
  };
  const down = e => {
    if (disabled || done) return;
    start.current = e.clientX - x;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDrag(true);
  };
  const move = e => {
    if (drag) setX(Math.max(0, Math.min(max(), e.clientX - start.current)));
  };
  const up = () => {
    if (!drag) return;
    setDrag(false);
    if (x >= max() * 0.9) commit();else setX(0);
  };
  const key = e => {
    if (!disabled && !done && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      commit();
    }
  };
  const tr = drag ? 'none' : done ? 'transform 180ms var(--ease-out), width 180ms var(--ease-out), background 180ms' : 'transform 240ms ease-out, width 240ms ease-out';
  return /*#__PURE__*/React.createElement("div", {
    ref: track,
    style: {
      position: 'relative',
      height: 60,
      borderRadius: 999,
      background: 'var(--surface-2)',
      boxShadow: 'inset 0 0 0 1px var(--border-default)',
      overflow: 'hidden',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: done ? '100%' : x > 0 ? x + 30 : 0,
      background: disabled || x === 0 && !done ? 'transparent' : done ? c : 'linear-gradient(90deg,transparent,' + glow + ')',
      transition: tr
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 700,
      color: done ? 'var(--pk-ink-950)' : disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      opacity: done ? 1 : Math.max(0.15, 1 - x / 160),
      whiteSpace: 'nowrap'
    }
  }, done ? doneLabel : label), /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled,
    "aria-label": label,
    onKeyDown: key,
    onPointerDown: down,
    onPointerMove: move,
    onPointerUp: up,
    onPointerCancel: up,
    style: {
      position: 'absolute',
      top: 4,
      left: 4,
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: disabled ? 'var(--border-default)' : c,
      color: 'var(--pk-ink-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      touchAction: 'none',
      cursor: disabled ? 'not-allowed' : 'grab',
      transform: 'translateX(' + x + 'px)',
      transition: tr
    }
  }, done ? /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m5 12 5 5 9-10"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }))));
}
Object.assign(__ds_scope, { SwipeToConfirm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trade/SwipeToConfirm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ASSETS = [{
  symbol: 'RELIANCE',
  name: 'Reliance Industries',
  price: 1248.00,
  change: 0.61
}, {
  symbol: 'INFY',
  name: 'Infosys',
  price: 1020.50,
  change: -0.86
}, {
  symbol: 'TCS',
  name: 'Tata Consultancy Services',
  price: 2076.10,
  change: -0.65
}, {
  symbol: 'HDFCBANK',
  name: 'HDFC Bank',
  price: 727.60,
  change: 0.90
}];
const series = (up, n = 24) => Array.from({
  length: n
}, (_, i) => 100 + (up ? 1 : -1) * i * .4 + Math.sin(i * 1.3) * 1.6);
function PocketHome({
  NS,
  cash,
  onOpen
}) {
  const {
    IconButton,
    Icon,
    Price,
    ChangeBadge,
    Card,
    Sparkline,
    Button,
    SegmentedControl,
    TickerRow,
    Tag
  } = NS;
  const [range, setRange] = React.useState('1D');
  const I = '../../assets/icons/';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      padding: '58px 20px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      scrollbarWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: 'var(--surface-2)',
      border: '1px solid var(--border-default)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '700 14px var(--font-sans)',
      color: 'var(--accent)'
    }
  }, "AR"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '12px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "Cash balance"), /*#__PURE__*/React.createElement(Price, {
    value: cash,
    size: "md"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    badge: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alerts",
    size: 20,
    base: I
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '13px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "Portfolio value"), /*#__PURE__*/React.createElement(Price, {
    value: 215640.84,
    size: "xl"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ChangeBadge, {
    value: 1.61,
    amount: 3412.10
  })), /*#__PURE__*/React.createElement(Sparkline, {
    data: series(true, 40),
    width: 310,
    height: 110,
    color: "var(--accent)",
    fill: true,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    mono: true,
    value: range,
    onChange: setRange,
    options: ['1D', '1W', '1M', '1Y', 'ALL'].map(x => ({
      value: x,
      label: x,
      tone: 'neutral'
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "md",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "add-funds",
      size: 16,
      base: I
    })
  }, "Add funds"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "withdraw",
      size: 16,
      base: I
    })
  }, "Withdraw"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "performance",
      size: 16,
      base: I
    })
  }, "Analytics"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 20px var(--font-sans)',
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, "Watchlist"), /*#__PURE__*/React.createElement(Tag, {
    live: true
  }, "Live")), ASSETS.map((a, i) => /*#__PURE__*/React.createElement(TickerRow, _extends({
    key: a.symbol
  }, a, {
    data: series(a.change >= 0),
    divider: i < ASSETS.length - 1,
    onClick: () => onOpen(a)
  })))));
}
window.PocketHome = PocketHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/TradeSheet.jsx
try { (() => {
function PocketTradeSheet({
  NS,
  asset,
  cash,
  onClose,
  onFill
}) {
  const {
    BottomSheet,
    SegmentedControl,
    Keypad,
    SwipeToConfirm,
    Price,
    ChangeBadge,
    Button
  } = NS;
  const [side, setSide] = React.useState('buy');
  const [amt, setAmt] = React.useState('');
  const [done, setDone] = React.useState(null);
  const last = React.useRef(asset);
  if (asset) last.current = asset;
  const a = last.current || {
    symbol: '',
    name: '',
    price: 0,
    change: 0
  };
  React.useEffect(() => {
    if (asset) {
      setAmt('');
      setDone(null);
      setSide('buy');
    }
  }, [asset]);
  const q = parseFloat(amt) || 0,
    cost = q * a.price,
    err = side === 'buy' && cost > cash ? 'Not enough cash. Add funds via UPI or lower the quantity' : null,
    ok = q > 0 && !err;
  const key = k => setAmt(v => k === 'del' ? v.slice(0, -1) : (v + k).slice(0, 6));
  const place = () => {
    setDone({
      q,
      cost
    });
    if (side === 'buy') onFill(cost);else onFill(-cost);
  };
  return /*#__PURE__*/React.createElement(BottomSheet, {
    open: !!asset,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 14,
      background: 'var(--surface-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '800 15px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, a.symbol[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 17px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, a.symbol), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '13px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, a.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Price, {
    value: a.price
  }), /*#__PURE__*/React.createElement(ChangeBadge, {
    value: a.change,
    size: "sm",
    arrow: false
  }))), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      padding: '36px 0 4px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 24px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "Order filled"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '14px/1.6 var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, (side === 'buy' ? 'Bought ' : 'Sold ') + done.q + ' ' + a.symbol + ' · settles T+1'), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onClose,
    style: {
      marginTop: 16
    }
  }, "Done")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SegmentedControl, {
    mono: true,
    value: side,
    onChange: setSide,
    options: [{
      value: 'buy',
      label: '[ BUY ]'
    }, {
      value: 'sell',
      label: '[ SELL ]',
      tone: 'loss'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Shares \xB7 Delivery"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 52px/1 var(--font-mono)',
      letterSpacing: '-0.03em',
      color: amt ? 'var(--text-primary)' : 'var(--text-disabled)'
    }
  }, amt || '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '14px var(--font-mono)',
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, "\u2248 \u20B9", cost.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), " \xB7 Market \xB7 NSE"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '13px var(--font-sans)',
      color: err ? 'var(--loss)' : 'var(--text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, err || 'Cash available ₹' + cash.toLocaleString('en-IN', {
    minimumFractionDigits: 2
  }))), /*#__PURE__*/React.createElement(Keypad, {
    onKey: key,
    decimal: false
  }), /*#__PURE__*/React.createElement(SwipeToConfirm, {
    side: side,
    disabled: !ok,
    label: ok ? 'Swipe to ' + side + ' ' + a.symbol : 'Enter an amount',
    onConfirm: place
  })));
}
window.PocketTradeSheet = PocketTradeSheet;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TradeSheet.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AppIcon = __ds_scope.AppIcon;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ChangeBadge = __ds_scope.ChangeBadge;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.TickerRow = __ds_scope.TickerRow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Keypad = __ds_scope.Keypad;

__ds_ns.SwipeToConfirm = __ds_scope.SwipeToConfirm;

})();
