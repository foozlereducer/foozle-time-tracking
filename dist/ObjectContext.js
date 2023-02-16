"use strict";
class ObjectContext {
    // This is the object whose behavior will change
    request(strategy) {
        // The request is handled by the class passed in
        return new strategy();
    }
}
