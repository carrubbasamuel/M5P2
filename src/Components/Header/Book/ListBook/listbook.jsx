export default function ListBook({ categoryArray }) {
  return (
    <div className="row justify-content-center align-items-center">
      <h1 className="text-center fs-1">Fantasy</h1>
      {categoryArray.map((book) => {
        return (
          <div className="col-3">
            <h1>{book.title}</h1>
            <img src={book.img} alt="book cover" />
          </div>
        );
      })}
    </div>
  );
}
