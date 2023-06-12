import React from 'react';

const Classess = () => {
    const classes = [
      {
        class: "Mithai",
        img: "https://i.ibb.co/g605hzz/c7.png",
       
      },
      {
        class: "Mithai",
        img: "https://i.ibb.co/CQqKxtm/c2.jpg",
       
      },
      {
        class: "Mithai",
        img: "https://i.ibb.co/PDj4hfQ/c3.jpg",
        
      },
      {
        class: "Mithai",
        img: "https://i.ibb.co/cJSL7WV/c4.png",
        
      },
      {
        class: "Mithai",
        img: "https://i.ibb.co/DwYrYSF/c5.png",
        
      },
      {
        class: "Mithai",
        img: "https://i.ibb.co/PtsybDR/c6.png",
        
      },
    ];
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {classes.map((cls, index) => (
            <div key={index}>
              <img
                src={cls.img}
                className="object-cover shadow rounded-lg hover:shadow-lg hover:scale-105 transition"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Classess;