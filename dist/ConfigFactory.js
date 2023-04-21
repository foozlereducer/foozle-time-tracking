/**
 * Configure Strategy factory
 */
class ConfigFactory {
    /**
     * Config Factory - The request is handled by the class passed in; it creates an instance
     * @param strategy - a concrete stratey
     * @returns object - an instance of the strategy
     */
    request(strategy) {
        // The request is handled by the class passed in
        return new strategy();
    }
}
export default ConfigFactory;
//# sourceMappingURL=ConfigFactory.js.map