import React from 'react'

const Process = () => {
  return (
    <>
      <div className="row mx-0">
        <div className='col-md-6 col-12 p-md-5 p-2'>
          <img
            className="card-img-top mx-auto img-fluid img-circle d-block"
            src={require(`../../../assets/images/7.png`)}
            alt="avatar"
            height='300px'
            width='300px'
          />
        </div>
        <div className="col-md-6 text-center col-12 p-md-5 p-2 align-items-center">
          <h1 className='text-center my-4'>Our Process</h1>
          <p>
            As a Stylist, this is a big one for me. When I’m going through a client’s wardrobe, we’re not in there
            for the sole purpose of decluttering. There are other factors at play, we’re building a style and finding
            the pieces that match that, and removing the things that don’t.
          </p>
          <p>
            We’re setting limitations for how much each person needs in their wardrobe before they start to feel
            overwhelmed with choice and we’re also thinking of ways we can make that space more user-
            friendly, providing less, what I love to call, mental clutter.
          </p>
          <p>
            Compare your schedule with your wardrobe and see what you’re wearing before you do any
            decluttering.
          </p>
        </div>
        <div className="row mx-0">
          <div className="col-12 p-0 process-section">
            <h5>Book an appointment</h5>
            <p>
              <b>Consultation</b> (Sometimes clients like doing the work themselves and just need the blueprint
              to do it. We can provide you with plans, product recommendations, and guidelines for your
              projects without any on-site assistance)
            </p>
            <p>
              <b>Project Execution</b> (From random piles of clothes to systemized shelves, this is where we
              shine. Not only do our organizational systems make your space look more appealing, but they
              can also reduce stress and free up more of your time)
            </p>
            <ul>
              <li>
                Unpacking (If you’re moving into a new home, you’re often focused on getting
                unpacked; not on neatly arranging your possessions and installing organizational
                systems. But that’s exactly what we focus on for you)
              </li>
              <li>
                De-cluttering (After our work is done, we can arrange periodic visits to help maintain
                your tidy spaces and ensure you get the most from your experience with us)
              </li>
              <li>
                De-papering (After our work is done, we can arrange periodic visits to help maintain
                your tidy spaces and ensure you get the most from your experience with us)
              </li>
              <li>
                Maintenance (After our work is done, we can arrange periodic visits to help maintain
                your tidy spaces and ensure you get the most from your experience with us)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Process