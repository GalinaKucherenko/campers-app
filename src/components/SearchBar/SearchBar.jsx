export default function SearchBar({onSearch}) {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;
        onSearch(topic);
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="topic" placeholder="Дані пошуку" />
            <button>Search</button>
        </form>
    )
}