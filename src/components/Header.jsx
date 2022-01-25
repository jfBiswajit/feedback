import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <header>
      <div className="container">
        <h1> {title} </h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'Default Title',
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
