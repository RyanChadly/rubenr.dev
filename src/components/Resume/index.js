import React, { Component } from "react"

class Resume extends Component {
  render() {
    const { info } = this.props
    return (
      <>
        <div id="resume"></div>
        <section className="section modular-text modular-resume bg-gray">
          <section className="container grid-lg">
            {info.map(section => (
              <div className={`columns ${section.css_class}`} key={section.id}>
                <div className="column col-3 col-md-12 header-col">
                  <h4>
                    <span>{section.title}</span>
                  </h4>
                </div>
                <div className="column col-9 col-md-12 main-col">
                  {section.items.map(item => (
                    <div className="columns item" key={item.id}>
                      <div className="column col-12">
                        <h4>{item.title}</h4>
                        <p className="info">
                          {item.info} <span>•</span>{" "}
                          <em className="date">{item.date}</em>
                        </p>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </section>
      </>
    )
  }
}

export default Resume
