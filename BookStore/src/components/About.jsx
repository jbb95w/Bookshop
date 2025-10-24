import React from "react";

const About = () => {
  return (
    <section className="p-8 flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8 max-w-6xl mx-auto">
      
      <div className="md:w-1/2">
        <img
          src="/img-logo/about-img.jpg"
          alt="About Book Hub"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </div>

      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl font-bold mb-4 text-stone-900">
          About Book Hub
        </h2>
        <p className="text-stone-950 leading-relaxed">
          <strong>Book Hub</strong> is your one-stop platform for discovering,
          exploring, and connecting with the world of books. Whether you are a
          passionate reader, a student, or someone searching for your next great
          read, Book Hub makes it easy to find and learn more about books that
          match your interests.
          <br />
          <br />
          With an intuitive search feature powered by the Google Books API,
          users can instantly access detailed information about thousands of
          books — including titles, authors, cover images, and summaries. Our
          goal is to make reading more accessible and enjoyable by bringing
          knowledge and stories closer to you.
          <br />
          <br />
          Book Hub is not just a search tool — it is a celebration of
          literature, imagination, and curiosity. Dive in, discover hidden gems,
          and build your personal reading journey today.
        </p>
      </div>
    
    </section>
  );
};

export default About;
