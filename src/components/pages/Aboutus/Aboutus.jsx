import React, { useEffect } from 'react'

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <div className="row mx-0 ">
        <div className="col-12 my-md-5 my-2">
          <img
            className="card-img mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/aboutus.png")}
            alt="avatar"
          />
          <div className="my-md-5 my-2">
            <h1 className='my-4 border-bottom pb-3'>Who We Are?</h1>
            <p>
              In our busy schedule, we don’t find time to de-clutter or organize our
              wardrobes, at such times you can think of us!
            </p>
            <p>
              Tidy Wardrobe is an organization, based in Mumbai dedicated to decluttering, organizing,
              and styling home spaces to leave them with an abode that they will love. We organize with
              the intent of creating something innovative, elegant, and beautiful. We truly believe that an
              organized house allows you to breathe a little easier and leaves a little more space in your
              mind for what matters.
            </p>
            <p>
              <b>In our mission</b> to create a functional and aesthetic balance, we bring out the potential in our
              client’s under-utilized, and often out of control, wardrobe, kitchen, and storage spaces.
              Through this process of organizing, we aim to bring calmness to the chaos of everyday life.
            </p>
            <p>
              You always try to keep things in place and make your spaces clean, but no matter how much
              we tidy them, always end up in clutter. And, now with lockdown slowly coming to a close,
              what better time to do something about it? Not only your place will look nicer, you will find
              things faster and also feel better about it.
            </p>
            <h6>
              Our mission is to help reduce the stress associated with facing disorganization and to
              implement functional, lasting systems that improve the quality of your daily life.
            </h6>
          </div>
          <div className="">
            <h1 className='border-bottom pb-3 my-4'>Our Story</h1>
            <p>
              It all started in 2020. Our founders, Reenaa Aroraa &amp; Renuka Arora, were exhausted by the
              amount of waste, clutter, and mess they used to clean during the lockdown. The thought of
              doing something which can reduce the clutter and make the space clean and calm came while
              organizing their own house.
            </p>
            <p>
              This hard work, Innovative ideas, dedication towards organizing,
              and tidying up brought them to start their little start-up “My Tidy Wardrobe”.
              Changing your cluttered wardrobe into a tidy one and making your place a neat space makes
              Reena have a sense of satisfaction and destressing. She with her mother’s support has
              efficiently organized and styled their wardrobes in a better way and donated the extra clothes
              to the ones in need.
            </p>
            <p>
              Her continuous efforts in changing her living place to a clutter-free and
              lively space paid off when people started taking notes and asking her for organizing tips. In
              addition, requested her guidance in setting up closets and kitchens. The Demand and
              acceptance from people made her initiate the idea of “My Tidy Wardrobe”, in assisting them
              in creating their own Happy Home.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus