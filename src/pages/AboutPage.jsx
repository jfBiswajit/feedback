import Card from '../components/shared/Card';

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
          <a href="/">Back To Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
