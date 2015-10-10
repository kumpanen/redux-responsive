// local imports
import triggerResponsiveStateManager from 'util/triggerResponsiveStateManager'


describe('triggerResponsiveStateManager', function () {
    it('returns the store it was given', function () {
        // fake store
        const store = {dispatch: () => ({})}

        // should return same value it is given
        expect(triggerResponsiveStateManager(store)).to.equal(store)
    })


    it('calls the dispatch property of the store arg', function () {
        const dispatch_spy = sinon.spy()

        triggerResponsiveStateManager({dispatch: dispatch_spy})

        // should have triggered our dispatch spy exactly once
        expect(dispatch_spy).to.have.been.calledOnce
    })


    it('could use some more tests')
})
