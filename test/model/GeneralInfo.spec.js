/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.6.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Otpixel);
  }
}(this, function(expect, Otpixel) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GeneralInfo', function() {
      beforeEach(function() {
        instance = new Otpixel.GeneralInfo();
      });

      it('should create an instance of GeneralInfo', function() {
        // TODO: update the code to test GeneralInfo
        expect(instance).to.be.a(Otpixel.GeneralInfo);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property supportSubscription (base name: "supportSubscription")', function() {
        // TODO: update the code to test the property supportSubscription
        expect(instance).to.have.property('supportSubscription');
        // expect(instance.supportSubscription).to.be(expectedValueLiteral);
      });

      it('should have the property supportExecSync (base name: "supportExecSync")', function() {
        // TODO: update the code to test the property supportExecSync
        expect(instance).to.have.property('supportExecSync');
        // expect(instance.supportExecSync).to.be(expectedValueLiteral);
      });

      it('should have the property supportExecAsync (base name: "supportExecAsync")', function() {
        // TODO: update the code to test the property supportExecAsync
        expect(instance).to.have.property('supportExecAsync');
        // expect(instance.supportExecAsync).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property system (base name: "system")', function() {
        // TODO: update the code to test the property system
        expect(instance).to.have.property('system');
        // expect(instance.system).to.be(expectedValueLiteral);
      });

      it('should have the property input (base name: "input")', function() {
        // TODO: update the code to test the property input
        expect(instance).to.have.property('input');
        // expect(instance.input).to.be(expectedValueLiteral);
      });

      it('should have the property output (base name: "output")', function() {
        // TODO: update the code to test the property output
        expect(instance).to.have.property('output');
        // expect(instance.output).to.be(expectedValueLiteral);
      });

      it('should have the property logging (base name: "logging")', function() {
        // TODO: update the code to test the property logging
        expect(instance).to.have.property('logging');
        // expect(instance.logging).to.be(expectedValueLiteral);
      });

    });
  });

}));
