import { Button, Carousel, Divider } from "react-daisyui";
import ProfilePicture from "../../assets/images/profile-picture.webp";

const About = () => {
  const buttonStyle = (value: string) => {
    return <Button color="primary">{value}</Button>;
  };

  return (
    <div className="items-start flex flex-col md:flex-row gap-4 md:gap-16 md:mr-16 xl:mr-32">
      <h1 className="text-md text-right font-semibold md:basis-1/4">ABOUT</h1>
      <div className="flex flex-col gap-8 md:basis-3/4">
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          quibusdam eligendi! Iure tempora veniam libero neque aliquam
          doloremque qui fuga, possimus unde reiciendis id pariatur corporis
          autem temporibus facere facilis, quibusdam eligendi. Eaque, enim
          adipisci! Cum, error.
          <br />
          <br />
          Quae distinctio at perferendis hic praesentium veniam unde earum
          doloremque, qui est et possimus id reprehenderit aliquid voluptatibus
          libero quasi aspernatur architecto dolorum dolore. Quae pariatur ab
          quibusdam odio, cupiditate corrupti quam esse nobis distinctio cum
          eaque! Vero illo modi voluptas expedita animi, autem eum iusto a hic,
          architecto omnis excepturi totam harum.
          <br />
          <br />
          Harum quos reiciendis voluptatem aliquam autem iste dolor molestias
          est voluptatibus. Nulla adipisci eaque pariatur temporibus eligendi
          ratione nam, et voluptatibus ducimus, dignissimos animi at nisi
          impedit illum est expedita.
        </div>
      </div>
    </div>
  );
};

export default About;
