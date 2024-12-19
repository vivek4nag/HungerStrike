import BottomCard from "./BottomCard";

const Bottom = () => {
  
  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis metus nec felis cursus, in dictum libero ultricies. Suspendisse potenti. metus nec felis cursus, in metus nec felis cursus, in ",
      name: "John Doe",
      role: "Software Engineer",
    },
    {
      text: "Praesent vel justo ac nunc sagittis pharetra sit amet ac magna. Sed in viverra erat. Nullam scelerisque mauris id ligula lacinia, et tincidunt lectus sollicitudin. esent vel justo ac nunc sagittis pharetra sit amet ac magna. Sed in",
      name: "Jane Smith",
      role: "Product Manager",
    },
    {
      text: "Ut dapibus, libero eget euismod vulputate, ipsum elit tristique quam, a pulvinar justo nisl vitae lectus. Vestibulum eu libero vel nisi efficitur malesuada. fjkddfhdshh jhd jdhfh djdhyrue jfhhjd jksuuyfhf djshdf ",
      name: "Michael Johnson",
      role: "Data Scientist",
    },
    {
      text: "Phasellus in risus at ligula eleifend ullamcorper. Proin vel fringilla arcu. Integer molestie, nunc sit amet auctor euismod, libero elit fermentum nulla.",
      name: "Emily Davis",
      role: "UX Designer",
    },
    {
      text: "Aliquam erat volutpat. Integer faucibus sodales neque, vel dignissim erat fringilla id. Curabitur accumsan felis ut sem bibendum, at fringilla arcu tempor. felis ut sem bibendum, at fringilla arcu tempor.",
      name: "David Wilson",
      role: "Marketing Specialist",
    },
    {
      text: "Mauris vehicula libero vitae eros eleifend, id pharetra nisi hendrerit. Integer auctor purus id eros venenatis luctus. Pellentesque euismod metus in urna finibus.",
      name: "Sophia Martinez",
      role: "Frontend Developer",
    },
    {
      text: "Praesent vel justo ac nunc sagittis pharetra sit amet ac magna. Sed in viverra erat. Nullam scelerisque mauris id ligula lacinia, et tincidunt lectus sollicitudin.",
      name: "Jane Smith",
      role: "Product Manager",
    },
    {
      text: "Mauris vehicula libero vitae eros eleifend, id pharetra nisi hendrerit. Integer auctor purus id eros venenatis luctus. Pellentesque euismod metus in urna finibus.",
      name: "Sophia Martinez",
      role: "Frontend Developer",
    },
  ];


  return (
    <div>
      <div className="p-4 pb-10 bg-gray-100 flex flex-wrap justify-center gap-4 md:gap-8 ">
        {data.map((item, idx) => (
          <BottomCard key={idx} text={item.text} name={item.name} role={item.role} />
        ))}
      </div>
    </div>
  );
};

export default Bottom;
