"use client";

export default function JoinButton({ link }) {
  const toRegisterLink = () => {
    window.open(link, "_blank");
  };

  return link === undefined ? (
    <></>
  ) : (
    <button
      className="bg-orange-500 hover:bg-orange-700 text-white text-xl md:text-2xl py-4 px-4 rounded-lg"
      onClick={toRegisterLink}
    >
      Click here to join our club!
    </button>
  );
}
