export function showAlert(SearchItem,error){
  return(
    <div className="alert alert-dismissible alert-danger">
      <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
      <strong>{`${SearchItem}`} is not a valid Movie Name!! {error}</strong>
    </div>
  )
}