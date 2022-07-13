import Card from "../components/card";
import PrimaryButton from "../components/primary-button";
import Search from "../components/search";

export default function Home() {
  const CARDS = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "janedoe",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 3,
      name: "John Doe",
      username: "johndoe",
      photo:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    },
  ];

  return (
    <div className="w-full h-full dark:bg-neutral-900">
      <div className="w-full p-4 text-center mx-auto">
        <h1 className="text-5xl font-bold dark:text-white mt-20 font-mono">
          Prepare for Interviews with Your Friends.
        </h1>
        <div className="md:flex gap-8 w-1/2 mx-auto m-10  place-items-center justify-around text-neutral-100">
          <Search />
          <div className="md:m-0 m-5">Or</div>
          <PrimaryButton title="Create Room" />
        </div>
      </div>
      <section
        id="cards"
        className="mt-16 px-12 grid grid-cols-2 gap-8 md:grid-cols-4 pb-10"
      >
        {CARDS.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
}
