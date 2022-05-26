import app from '../index'

it('expect typeof(app)toEqual Express', () => {
    expect(typeof app).toEqual('function')
})
