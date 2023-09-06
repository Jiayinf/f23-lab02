function square(sideLen: number): Shape {
    return {gi
        // sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { square }