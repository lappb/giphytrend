/* eslint-disable no-shadow */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setLocale } from '../../../store/intl';

function LanguageSwitcher({ currentLocale, availableLocales, setLocale }) {
  const isSelected = (locale) => locale === currentLocale;
  const localeDict = {
    'en': 'English',
    'vi': 'Vietnam',
  };
  const localeName = (locale) => localeDict[locale] || locale;
  return (
    <ul className="nav navbar-nav">
      {availableLocales.map(locale => (
        <li key={locale}>
          {isSelected(locale) ? (
            <span>{localeName(locale)}</span>
          ) : (
            // github.com/yannickcr/eslint-plugin-react/issues/945
            // eslint-disable-next-line react/jsx-indent
            <a className="dropdown-toggle"
              href={`?lang=${locale}`}
              onClick={(e) => {
                setLocale(locale);
                e.preventDefault();
              }}
            >{localeName(locale)}</a>
          )}
          {' '}
        </li>
      ))}
    </ul>
  );
}

// LanguageSwitcher.propTypes = {
//   currentLocale: PropTypes.string.isRequired,
//   availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
//   setLocale: PropTypes.func.isRequired,
// };

const mapState = (state) => ({
  availableLocales: state.runtime,
  currentLocale: state.locale,
});

const mapDispatch = {
  setLocale,
};

// export default connect(mapState, mapDispatch)(LanguageSwitcher);
export default connect(mapState, mapDispatch)(LanguageSwitcher);
