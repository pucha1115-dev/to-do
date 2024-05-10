import Note from "../components/Note";

const home = () => {
  const testNotes = [
    {
      id: 1,
      title: "Meeting Agenda",
      content: "Discuss quarterly goals\nReview budget\nAssign action items",
    },
    {
      id: 2,
      title: "Grocery List",
      content: "Eggs\nMilk\nBread\nApples\nChicken",
    },
    {
      id: 3,
      title: "Birthday Party Plans",
      content:
        "Venue: Park\nDate: June 15th\nTime: 2:00 PM\nGuest list: Friends and family",
    },
    {
      id: 4,
      title: "Book Recommendations",
      content:
        "1. 'The Alchemist' by Paulo Coelho\n2. 'To Kill a Mockingbird' by Harper Lee\n3. '1984' by George Orwell",
    },
    {
      id: 5,
      title: "Workout Routine",
      content:
        "Monday: Cardio\nTuesday: Upper body\nWednesday: Rest\nThursday: Lower body\nFriday: Yoga",
    },
  ];

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <div className="row g-2">
                  <div className="col">
                    <h4>Hello, John Paul Geralla!</h4>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-outline-primary">
                      Logout
                      <i className="bi bi-box-arrow-right custom-icon"></i>
                    </button>
                  </div>
                </div>
                <br />
                <form className="row g-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control add-task"
                      placeholder="New Task..."
                    />
                  </div>

                  <div className="col">
                    <button type="submit" className="btn btn-success mb-3">
                      Add Todo
                    </button>
                  </div>
                </form>
                <ul className="nav nav-pills todo-nav">
                  <li role="presentation" className="nav-item all-task active">
                    <a href="#" className="nav-link">
                      All
                    </a>
                  </li>
                  <li role="presentation" className="nav-item active-task">
                    <a href="#" className="nav-link">
                      Active
                    </a>
                  </li>
                  <li role="presentation" className="nav-item completed-task">
                    <a href="#" className="nav-link">
                      Completed
                    </a>
                  </li>
                </ul>
                <div className="todo-list">
                  {testNotes.map((note) => {
                    return <Note note={note} key={note.id} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
