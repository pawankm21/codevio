export default function Card({ name, username, photo }) {
    return (
      <div
        className={`rounded-lg dark:bg-gray-900 border font-mono border-neutral-400  shadow-xl p-6 w-full`}
      >
        <div className="md:flex justify-between">
          <div className="flex">
            <img
              src={photo}
              className="object-cover w-10 rounded-full place-self-center h-10"
              alt="avatar"
            />
          </div>

          <div>
            <div className="font-medium text-lg text-blue-400">{name}</div>
            <div className="font-medium text-purple-400 italic">@{username}</div>
          </div>
        </div>
      </div>
    );
}