export default function BookForm() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const { name, email, date, comment } = form.elements;
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book your campervan now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <input type="text" name="name" />
            <input type="text" name="email" />
            <input type="text" name="date" />
            <input type="text" name="comment" />
            <button>Send</button>

        </form>
    )
}