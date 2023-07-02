const PostPAge = () => {
  return <div></div>;
};

export default PostPAge;
export async function getServerSideProps(ctx) {
  const { query } = ctx;
  console.log(query);
  // return:{
  //     props:{

  //     }
  // }
}
