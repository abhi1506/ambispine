const softwareData = {
  title: "Custom Software Development",
  description:
    "In today's fast-paced digital landscape, custom software development is crucial for businesses to stay ahead of the competition. Our software development services help you design, develop, and deploy robust software solutions that meet your unique needs and goals.",
  categories: [
    {
      category: "Industry-Specific Solutions",
      solutions: [
        {
          name: "Banking Software",
          description:
            "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
        },
        {
          name: "HR Software",
          description:
            "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
        },
        {
          name: "HR Software",
          description:
            "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
        },
        {
          name: "HR Software",
          description:
            "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
        },
        {
          name: "HR Software",
          description:
            "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
        },
      ],
    },
    {
      category: "Business Productivity Solutions",
      solutions: [
        {
          name: "E-Commerce Software",
          description:
            "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
        },
        {
          name: "Billing Software",
          description:
            "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
        },
      ],
    },
    {
      category: "Education and Field Solutions",
      solutions: [
        {
          name: "School Software",
          description:
            "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
        },
        {
          name: "Field Officer Software",
          description:
            "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
        },
      ],
    },
  ],
};
import './OurSoftwareProduct.css'

const SoftwareProduct = () => {
  return (
    <div className='soft-product-section'>
          <div className='soft-product-container'>
          <div className='soft-product-sect-top'>
      <h1>{softwareData.title}</h1>
      <p>{softwareData.description}</p>
      </div>

      {softwareData.categories.map((category, index) => (
        <div key={index} className=''>
          <h2 className='soft-ware-produt-title'>{category.category}</h2>
          <div className='soft-prouct-sec-body'>
          
            {category.solutions.map((solution, idx) => (
               <div key={idx} className='soft-product-sec-card'>
                    <h5 className='soft-product-card-name'>{solution.name}</h5>
                    <p className='soft-product-card-title'>{solution.description}</p>
           
              </div>
            ))}
          
        </div>
      </div>

      ))}
          </div>
    
    </div>
  );
};

export default SoftwareProduct;
