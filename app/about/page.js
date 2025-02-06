import './About.css';

const About = () => {
  return (
    <div className="about">
    <div className="store-info">
    <h1>BeWell - Your Local Health Food Store</h1>
    <p className="intro">
      Welcome to <strong>BeWell</strong>, your trusted local health food store dedicated to bringing you the best in organic and natural products. We are located at the heart of the community, offering a wide selection of items that support a healthy, sustainable lifestyle.
    </p>
    <p className="address">
      <strong>Our Location:</strong> <br />
      <span>7-9 BROOMFIELD ROAD, CM1 1SY</span> <br />
      <span>Opposite Ship Pub</span>
    </p>
    <p className="store-description">
      At BeWell, we believe that health begins with what you put into your body. That’s why we have carefully curated a selection of high-quality products to meet your wellness needs. Whether you are looking for organic wholefoods, natural teas, or supplements to boost your vitality, we have it all.
    </p>
    <h2 className="products-heading">Our Products Include:</h2>
    <p className="products-description">
      We are proud to offer a wide range of products that cater to various health needs, from enhancing your physical well-being to supporting your mental clarity. Our range includes:
    </p>
    <ul className="product-list">
      <li>Organic Wholefoods – Fresh, wholesome, and nutrient-packed foods to nourish your body.</li>
      <li>Supplements – Boost your health with natural supplements for various needs.</li>
      <li>Ayurvedic Range – Holistic products rooted in ancient traditions to balance your mind and body.</li>
      <li>Natural Tea – A selection of calming and invigorating teas to soothe and energize.</li>
      <li>Herbs – The power of nature’s healing herbs for a variety of health benefits.</li>
      <li>And Many More – A variety of other health-focused products to support a better lifestyle.</li>
    </ul>
    <p className="final-note">
      We invite you to visit us and explore our products that are designed to help you lead a healthier, more balanced life. Our friendly and knowledgeable team is always available to assist you in finding the perfect product to suit your needs.
    </p>
  </div>
  </div>
  );
};

export default About;