import test from 'ava'
import getRoot from './'
import { jsdom } from 'jsdom'

global.window = jsdom().defaultView
global.document = window.document

let root = getRoot()
test("returns a div", t => {
  t.is(root.id,'root')
})
test("has an id of root", t => {
  t.is(root.id,'root')
})
