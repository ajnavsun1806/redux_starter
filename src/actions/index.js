export default function(book){
    console.log(`The selected book for now is ${book.title}`);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}