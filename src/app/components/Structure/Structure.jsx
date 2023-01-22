const Structure = ({ outlet }) => {
  return (
    <div className='flex'>
      <div>
        <div className='max-w-screen-2xl mx-auto'>{outlet}</div>
      </div>
    </div>
  );
};
export default Structure;
