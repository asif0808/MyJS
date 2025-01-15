const arr=[1,2,3,4,5,6,7,8,9,10];
evenarr=arr.filter((x)=>x%2==0)
console.log(evenarr);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// using filter() to get specific records
//1. books with genre history
const newBooks=books.filter((book)=> book.genre=='History')
console.log(newBooks);
// 2.books published after 2000
const newBooks2=books.filter((book)=>book.publish>2000)
console.log('books published after 2000');
console.log(newBooks2);
// 3. books published before 2000 with genre history
const totalBooks=books.filter((book)=>{
    return book.genre==="History" && book.edition>2000
})
console.log(totalBooks);
