/**
 * Created by KyleRuan on 2017/5/4.
 */
// test the component that have no state

import  React from 'react';
import {expect} from 'chai';
import List from '../app/components/List';
import ListItem from '../app/components/ListItem';
import ItemShowLayer from  '../app/components/ItemShowLayer';
import {shallow, mount} from 'enzyme';
import Deskmark from '../app/components/Deskmark';

describe("Test all the SFC using  Enzyme", ()=> {
  const testData = [
    {
      "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
      "title": "Hello",
      "content": "# testing markdown",
      "time": 1458030208359
    }, {
      "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775b",
      "title": "Hello2",
      "content": "# Hello world",
      "time": 1458030208359
    }
  ];
  it('test List component using the Enzyme', ()=> {
    let list = shallow(<List items={testData} />);
    expect(list.find(ListItem).length).to.equal(testData.length)
  });
  it('test ItemShowLayer with no data using Enzyme' , ()=> {
    let itemShowLayer = shallow(<ItemShowLayer item={null} />)
    expect(itemShowLayer.find('.no-select').length).to.equal(1);
  });
  it('test ItemShowLayer with  data using Enzyme' , ()=> {
    let itemShowLayer = shallow(<ItemShowLayer item= {testData[0]} />);
    expect(itemShowLayer.find('h2').text()).to.equal(testData[0].title);
    expect(itemShowLayer.hasClass('item-show-layer-component')).to.equal(true);
  });
})