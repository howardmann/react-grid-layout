import React, { Component } from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';
import styled from 'styled-components'
import Chart from './Chart.js'
// Used to automatically determine width upon initialisation of window
const ResponsiveGridLayout = WidthProvider(Responsive)

const Widget = styled.div`
  background: gainsboro;
  border: 1px solid black;
  border-radius: 5px;
  overflow: scroll;
`

const initialState = {
  items: [
  {
    id: 1,
    content: 'one',
    layout: {
      i: '1',
      x: 0,
      y: 0,
      w: 4,
      h: 6,
      minH: 3
    }
  },
  {
    id: 2,
    content: 'two',
    layout: {
      i: '2',
      x: 4,
      y: 0,
      w: 4,
      h: 6,
      minH: 3
    }
  },
  {
    id: 3,
    content: 'three',
    layout: {
      i: '3',
      x: 8,
      y: 0,
      w: 4,
      h: 6,
      minH: 3
    }
  },
  {
    id: 4,
    content: 'four',
    layout: {
      i: '4',
      x: 0,
      y: 0,
      w: 4,
      h: 6,
      minH: 3
    }
  },
  {
    id: 5,
    content: 'five',
    layout: {
      i: '5',
      x: 4,
      y: 0,
      w: 4,
      h: 6,
      minH: 3
    }
  }
]}


let GridItem = (props) => {
  let {content, layout} = props
  return (
    <Widget key={layout.i} data-grid={layout}>
      {content}
      <ul>
        <li>x: {layout.x}</li>
        <li>y: {layout.y}</li>
        <li>w: {layout.w}</li>
        <li>h: {layout.h}</li>
      </ul>
      <Chart/>
    </Widget>
  )
}

class MyFirstGrid extends React.Component {
  constructor(props){
    super(props)
    this.state = initialState
  }

  updateLayout = ({newLayout, items}) => {    
    let newItems = items
    newLayout.forEach(el => {
      let {i, x, y, w, h} = el
      const toUpdate = {i, x, y, w, h}
      let foundIndex = newItems.findIndex(el => el.layout.i === i)
      newItems[foundIndex].layout = toUpdate      
    })
    this.setState({items: newItems})
  }

  onLayoutChange = (e) => {
    this.updateLayout({newLayout: e, items: this.state.items})
  }

  render() {
    let {items} = this.state
    return (
      <ResponsiveGridLayout 
        className="layout" 
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        rowHeight={40}
        cols={{lg: 12, md: 12, sm: 12, xs: 4, xxs: 4}}
        onLayoutChange={this.onLayoutChange}
      >
        {
        items && items.map(item => GridItem(item))
        }
      </ResponsiveGridLayout>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <p>React Grid Layout</p>
        <div className="col col-12">
          <MyFirstGrid/>
        </div>
      </div>
    );
  }
}

export default App;
