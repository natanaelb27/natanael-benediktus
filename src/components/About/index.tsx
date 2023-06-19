import { Button, Carousel, Divider } from "react-daisyui";
import ProfilePicture from "../../assets/images/profile-picture.webp";

const About = () => {
  const buttonStyle = (value: string) => {
    return <Button color="primary">{value}</Button>;
  };

  return (
    <div className="px-12 lg:px-52 py-10">
      <h1 className="text-3xl font-semibold">About</h1>
      <Divider></Divider>
      <div className="flex flex-col xl:flex-row gap-12">
        <div className="flex justify-center align-middle">
          <Carousel
            buttonStyle={buttonStyle}
            className="rounded-box w-96 md:h-96"
          >
            <Carousel.Item className="w-full" src={ProfilePicture} />
            <Carousel.Item className="w-full" src={ProfilePicture} />
            <Carousel.Item className="w-full" src={ProfilePicture} />
          </Carousel>
        </div>
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
