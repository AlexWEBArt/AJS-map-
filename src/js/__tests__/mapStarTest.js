import Settings from '../mapStar'

test('testing the installation of user settings', () => {
    const result = new Settings('light', 'chillout')
    const custom = { theme: 'light', music: 'chillout', difficulty: 'easy' }
    expect(result.getSettings()).toEqual(custom)
})