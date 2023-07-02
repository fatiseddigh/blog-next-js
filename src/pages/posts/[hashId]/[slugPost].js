import axios from "axios";

const PostPAge = ({ postData }) => {
  console.log(postData);
  return <div></div>;
};

export default PostPAge;
export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.slugPost}`);
  return {
    props: {
      postData: data,
    },
  };
}
