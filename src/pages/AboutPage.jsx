import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti
          odit dicta dolore fuga maxime vitae aperiam repellat totam ipsum.
        </p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
