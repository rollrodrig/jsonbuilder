import { assert, expect } from 'chai';
import { fakerGenerator } from './fakerGenerator';

describe('generateResponse: ', () => {
    it('should response with dummy data', () => {
        assert.isString(fakerGenerator("string"));
        assert.isNumber(fakerGenerator("number"));
        assert.isBoolean(fakerGenerator("boolean"));
        assert.isNull(fakerGenerator("null"));
        assert.isUndefined(fakerGenerator("undefined"));
        assert.isEmpty(fakerGenerator("empty"));
        assert.isString(fakerGenerator("name"));
        assert.isString(fakerGenerator("firstname"));
        assert.isString(fakerGenerator("lastname"));
        assert.isString(fakerGenerator("email"));
        assert.isString(fakerGenerator("word"));
        assert.isString(fakerGenerator("words"));
        assert.isString(fakerGenerator("title"));
        assert.isString(fakerGenerator("sentence"));
        assert.isString(fakerGenerator("sentences"));
        assert.isString(fakerGenerator("paragraph"));
        assert.isString(fakerGenerator("paragraphs"));
        assert.isString(fakerGenerator("text"));
        assert.isString(fakerGenerator("uuid"));
        assert.isNumber(fakerGenerator("age"));
        assert.isNumber(fakerGenerator("age18"));
    });
});
