/*
 * OTPIXEL
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.11
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

  beforeEach(function() {
    instance = new Otpixel.KPIResourceApi();
  });

  describe('(package)', function() {
    describe('KPIResourceApi', function() {
      describe('createKPI', function() {
        it('should call createKPI successfully', function(done) {
          // TODO: uncomment, update parameter values for createKPI call and complete the assertions
          /*
          var body = new Otpixel.KPI();
          body.id = "";
          body.name = "";
          body.category = "";
          body.subcategory = "";
          body.description = "";
          body.unit = "";
          body.creation = "0";
          body.ports = [""];
          body.kpiThresholds = new Otpixel.KpiThresholds();
          body.kpiThresholds.lowerThres = 0.0;
          body.kpiThresholds.upperThres = 0.0;
          body.operation = new Otpixel.KpiOperation();
          body.operation.mode = "";
          body.operation.staticMode = new Otpixel.KpiOperationStatic();
          body.operation.staticMode.value = 0.0;
          body.operation.staticMode.lastUpdate = "0";
          body.operation.scheduledMode = new Otpixel.KpiOperationScheduled();
          body.operation.scheduledMode.idRef = "";
          body.operation.scheduledMode.type = "";
          body.operation.scheduledMode.searchforValue = "";
          body.operation.dynamicMode = new Otpixel.KpiOperationDynamic();
          body.operation.dynamicMode.inputEndPoint = new Otpixel.InputEndpoint();
          body.operation.dynamicMode.inputEndPoint.url = "";
          body.operation.dynamicMode.inputEndPoint.type = "";
          body.operation.dynamicMode.inputEndPoint.operation = "";
          body.operation.dynamicMode.inputEndPoint.body = ;
          body.operation.dynamicMode.inputEndPoint.headers = [new Otpixel.InputHeader()];
          body.operation.dynamicMode.inputEndPoint.headers[0].key = "";
          body.operation.dynamicMode.inputEndPoint.headers[0].value = "";
          body.operation.dynamicMode.searchforValue = "";
          body.operation.dynamicMode.serchforTimeStampUnix = "";
          body.operation.dynamicMode.searchforTimeStampIso8601 = "";

          instance.createKPI(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.KPI);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.category).to.be.a('string');
            expect(data.category).to.be("");
            expect(data.subcategory).to.be.a('string');
            expect(data.subcategory).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.unit).to.be.a('string');
            expect(data.unit).to.be("");
            expect(data.creation).to.be.a('number');
            expect(data.creation).to.be("0");
            {
              let dataCtr = data.ports;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.kpiThresholds).to.be.a(Otpixel.KpiThresholds);
                  expect(data.kpiThresholds.lowerThres).to.be.a('number');
              expect(data.kpiThresholds.lowerThres).to.be(0.0);
              expect(data.kpiThresholds.upperThres).to.be.a('number');
              expect(data.kpiThresholds.upperThres).to.be(0.0);
            expect(data.operation).to.be.a(Otpixel.KpiOperation);
                  expect(data.operation.mode).to.be.a('string');
              expect(data.operation.mode).to.be("");
              expect(data.operation.staticMode).to.be.a(Otpixel.KpiOperationStatic);
                    expect(data.operation.staticMode.value).to.be.a('number');
                expect(data.operation.staticMode.value).to.be(0.0);
                expect(data.operation.staticMode.lastUpdate).to.be.a('number');
                expect(data.operation.staticMode.lastUpdate).to.be("0");
              expect(data.operation.scheduledMode).to.be.a(Otpixel.KpiOperationScheduled);
                    expect(data.operation.scheduledMode.idRef).to.be.a('string');
                expect(data.operation.scheduledMode.idRef).to.be("");
                expect(data.operation.scheduledMode.type).to.be.a('string');
                expect(data.operation.scheduledMode.type).to.be("");
                expect(data.operation.scheduledMode.searchforValue).to.be.a('string');
                expect(data.operation.scheduledMode.searchforValue).to.be("");
              expect(data.operation.dynamicMode).to.be.a(Otpixel.KpiOperationDynamic);
                    expect(data.operation.dynamicMode.inputEndPoint).to.be.a(Otpixel.InputEndpoint);
                      expect(data.operation.dynamicMode.inputEndPoint.url).to.be.a('string');
                  expect(data.operation.dynamicMode.inputEndPoint.url).to.be("");
                  expect(data.operation.dynamicMode.inputEndPoint.type).to.be.a('string');
                  expect(data.operation.dynamicMode.inputEndPoint.type).to.be("");
                  expect(data.operation.dynamicMode.inputEndPoint.operation).to.be.a('string');
                  expect(data.operation.dynamicMode.inputEndPoint.operation).to.be("");
                  expect(data.operation.dynamicMode.inputEndPoint.body).to.be.a(Object);
                  expect(data.operation.dynamicMode.inputEndPoint.body).to.be();
                  {
                    let dataCtr = data.operation.dynamicMode.inputEndPoint.headers;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Otpixel.InputHeader);
                      expect(data.key).to.be.a('string');
                      expect(data.key).to.be("");
                      expect(data.value).to.be.a('string');
                      expect(data.value).to.be("");
                    }
                  }
                expect(data.operation.dynamicMode.searchforValue).to.be.a('string');
                expect(data.operation.dynamicMode.searchforValue).to.be("");
                expect(data.operation.dynamicMode.serchforTimeStampUnix).to.be.a('string');
                expect(data.operation.dynamicMode.serchforTimeStampUnix).to.be("");
                expect(data.operation.dynamicMode.searchforTimeStampIso8601).to.be.a('string');
                expect(data.operation.dynamicMode.searchforTimeStampIso8601).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteKPI', function() {
        it('should call deleteKPI successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteKPI call
          /*
          var id = "id_example";

          instance.deleteKPI(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getKPIByID', function() {
        it('should call getKPIByID successfully', function(done) {
          // TODO: uncomment, update parameter values for getKPIByID call and complete the assertions
          /*
          var id = "id_example";

          instance.getKPIByID(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.KPI);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.category).to.be.a('string');
            expect(data.category).to.be("");
            expect(data.subcategory).to.be.a('string');
            expect(data.subcategory).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.unit).to.be.a('string');
            expect(data.unit).to.be("");
            expect(data.creation).to.be.a('number');
            expect(data.creation).to.be("0");
            {
              let dataCtr = data.ports;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.kpiThresholds).to.be.a(Otpixel.KpiThresholds);
                  expect(data.kpiThresholds.lowerThres).to.be.a('number');
              expect(data.kpiThresholds.lowerThres).to.be(0.0);
              expect(data.kpiThresholds.upperThres).to.be.a('number');
              expect(data.kpiThresholds.upperThres).to.be(0.0);
            expect(data.operation).to.be.a(Otpixel.KpiOperation);
                  expect(data.operation.mode).to.be.a('string');
              expect(data.operation.mode).to.be("");
              expect(data.operation.staticMode).to.be.a(Otpixel.KpiOperationStatic);
                    expect(data.operation.staticMode.value).to.be.a('number');
                expect(data.operation.staticMode.value).to.be(0.0);
                expect(data.operation.staticMode.lastUpdate).to.be.a('number');
                expect(data.operation.staticMode.lastUpdate).to.be("0");
              expect(data.operation.scheduledMode).to.be.a(Otpixel.KpiOperationScheduled);
                    expect(data.operation.scheduledMode.idRef).to.be.a('string');
                expect(data.operation.scheduledMode.idRef).to.be("");
                expect(data.operation.scheduledMode.type).to.be.a('string');
                expect(data.operation.scheduledMode.type).to.be("");
                expect(data.operation.scheduledMode.searchforValue).to.be.a('string');
                expect(data.operation.scheduledMode.searchforValue).to.be("");
              expect(data.operation.dynamicMode).to.be.a(Otpixel.KpiOperationDynamic);
                    expect(data.operation.dynamicMode.inputEndPoint).to.be.a(Otpixel.InputEndpoint);
                      expect(data.operation.dynamicMode.inputEndPoint.url).to.be.a('string');
                  expect(data.operation.dynamicMode.inputEndPoint.url).to.be("");
                  expect(data.operation.dynamicMode.inputEndPoint.type).to.be.a('string');
                  expect(data.operation.dynamicMode.inputEndPoint.type).to.be("");
                  expect(data.operation.dynamicMode.inputEndPoint.operation).to.be.a('string');
                  expect(data.operation.dynamicMode.inputEndPoint.operation).to.be("");
                  expect(data.operation.dynamicMode.inputEndPoint.body).to.be.a(Object);
                  expect(data.operation.dynamicMode.inputEndPoint.body).to.be();
                  {
                    let dataCtr = data.operation.dynamicMode.inputEndPoint.headers;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Otpixel.InputHeader);
                      expect(data.key).to.be.a('string');
                      expect(data.key).to.be("");
                      expect(data.value).to.be.a('string');
                      expect(data.value).to.be("");
                    }
                  }
                expect(data.operation.dynamicMode.searchforValue).to.be.a('string');
                expect(data.operation.dynamicMode.searchforValue).to.be("");
                expect(data.operation.dynamicMode.serchforTimeStampUnix).to.be.a('string');
                expect(data.operation.dynamicMode.serchforTimeStampUnix).to.be("");
                expect(data.operation.dynamicMode.searchforTimeStampIso8601).to.be.a('string');
                expect(data.operation.dynamicMode.searchforTimeStampIso8601).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getKPILastValueByID', function() {
        it('should call getKPILastValueByID successfully', function(done) {
          // TODO: uncomment, update parameter values for getKPILastValueByID call and complete the assertions
          /*
          var id = "id_example";

          instance.getKPILastValueByID(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.LastKPI);
            expect(data.value).to.be.a('number');
            expect(data.value).to.be(0.0);
            expect(data.lastUpdate).to.be.a('number');
            expect(data.lastUpdate).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getKPILastValuesByID', function() {
        it('should call getKPILastValuesByID successfully', function(done) {
          // TODO: uncomment, update parameter values for getKPILastValuesByID call and complete the assertions
          /*
          var id = "id_example";

          instance.getKPILastValuesByID(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listKPIs', function() {
        it('should call listKPIs successfully', function(done) {
          // TODO: uncomment, update parameter values for listKPIs call and complete the assertions
          /*
          var opts = {};
          opts.category = "category_example";

          instance.listKPIs(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Otpixel.KPI);
              expect(data.id).to.be.a('string');
              expect(data.id).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.category).to.be.a('string');
              expect(data.category).to.be("");
              expect(data.subcategory).to.be.a('string');
              expect(data.subcategory).to.be("");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.unit).to.be.a('string');
              expect(data.unit).to.be("");
              expect(data.creation).to.be.a('number');
              expect(data.creation).to.be("0");
              {
                let dataCtr = data.ports;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              expect(data.kpiThresholds).to.be.a(Otpixel.KpiThresholds);
                    expect(data.kpiThresholds.lowerThres).to.be.a('number');
                expect(data.kpiThresholds.lowerThres).to.be(0.0);
                expect(data.kpiThresholds.upperThres).to.be.a('number');
                expect(data.kpiThresholds.upperThres).to.be(0.0);
              expect(data.operation).to.be.a(Otpixel.KpiOperation);
                    expect(data.operation.mode).to.be.a('string');
                expect(data.operation.mode).to.be("");
                expect(data.operation.staticMode).to.be.a(Otpixel.KpiOperationStatic);
                      expect(data.operation.staticMode.value).to.be.a('number');
                  expect(data.operation.staticMode.value).to.be(0.0);
                  expect(data.operation.staticMode.lastUpdate).to.be.a('number');
                  expect(data.operation.staticMode.lastUpdate).to.be("0");
                expect(data.operation.scheduledMode).to.be.a(Otpixel.KpiOperationScheduled);
                      expect(data.operation.scheduledMode.idRef).to.be.a('string');
                  expect(data.operation.scheduledMode.idRef).to.be("");
                  expect(data.operation.scheduledMode.type).to.be.a('string');
                  expect(data.operation.scheduledMode.type).to.be("");
                  expect(data.operation.scheduledMode.searchforValue).to.be.a('string');
                  expect(data.operation.scheduledMode.searchforValue).to.be("");
                expect(data.operation.dynamicMode).to.be.a(Otpixel.KpiOperationDynamic);
                      expect(data.operation.dynamicMode.inputEndPoint).to.be.a(Otpixel.InputEndpoint);
                        expect(data.operation.dynamicMode.inputEndPoint.url).to.be.a('string');
                    expect(data.operation.dynamicMode.inputEndPoint.url).to.be("");
                    expect(data.operation.dynamicMode.inputEndPoint.type).to.be.a('string');
                    expect(data.operation.dynamicMode.inputEndPoint.type).to.be("");
                    expect(data.operation.dynamicMode.inputEndPoint.operation).to.be.a('string');
                    expect(data.operation.dynamicMode.inputEndPoint.operation).to.be("");
                    expect(data.operation.dynamicMode.inputEndPoint.body).to.be.a(Object);
                    expect(data.operation.dynamicMode.inputEndPoint.body).to.be();
                    {
                      let dataCtr = data.operation.dynamicMode.inputEndPoint.headers;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Otpixel.InputHeader);
                        expect(data.key).to.be.a('string');
                        expect(data.key).to.be("");
                        expect(data.value).to.be.a('string');
                        expect(data.value).to.be("");
                      }
                    }
                  expect(data.operation.dynamicMode.searchforValue).to.be.a('string');
                  expect(data.operation.dynamicMode.searchforValue).to.be("");
                  expect(data.operation.dynamicMode.serchforTimeStampUnix).to.be.a('string');
                  expect(data.operation.dynamicMode.serchforTimeStampUnix).to.be("");
                  expect(data.operation.dynamicMode.searchforTimeStampIso8601).to.be.a('string');
                  expect(data.operation.dynamicMode.searchforTimeStampIso8601).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateKPI', function() {
        it('should call updateKPI successfully', function(done) {
          // TODO: uncomment, update parameter values for updateKPI call and complete the assertions
          /*
          var body = new Otpixel.KPI();
          body.id = "";
          body.name = "";
          body.category = "";
          body.subcategory = "";
          body.description = "";
          body.unit = "";
          body.creation = "0";
          body.ports = [""];
          body.kpiThresholds = new Otpixel.KpiThresholds();
          body.kpiThresholds.lowerThres = 0.0;
          body.kpiThresholds.upperThres = 0.0;
          body.operation = new Otpixel.KpiOperation();
          body.operation.mode = "";
          body.operation.staticMode = new Otpixel.KpiOperationStatic();
          body.operation.staticMode.value = 0.0;
          body.operation.staticMode.lastUpdate = "0";
          body.operation.scheduledMode = new Otpixel.KpiOperationScheduled();
          body.operation.scheduledMode.idRef = "";
          body.operation.scheduledMode.type = "";
          body.operation.scheduledMode.searchforValue = "";
          body.operation.dynamicMode = new Otpixel.KpiOperationDynamic();
          body.operation.dynamicMode.inputEndPoint = new Otpixel.InputEndpoint();
          body.operation.dynamicMode.inputEndPoint.url = "";
          body.operation.dynamicMode.inputEndPoint.type = "";
          body.operation.dynamicMode.inputEndPoint.operation = "";
          body.operation.dynamicMode.inputEndPoint.body = ;
          body.operation.dynamicMode.inputEndPoint.headers = [new Otpixel.InputHeader()];
          body.operation.dynamicMode.inputEndPoint.headers[0].key = "";
          body.operation.dynamicMode.inputEndPoint.headers[0].value = "";
          body.operation.dynamicMode.searchforValue = "";
          body.operation.dynamicMode.serchforTimeStampUnix = "";
          body.operation.dynamicMode.searchforTimeStampIso8601 = "";

          instance.updateKPI(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.KPI);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.category).to.be.a('string');
            expect(data.category).to.be("");
            expect(data.subcategory).to.be.a('string');
            expect(data.subcategory).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.unit).to.be.a('string');
            expect(data.unit).to.be("");
            expect(data.creation).to.be.a('number');
            expect(data.creation).to.be("0");
            {
              let dataCtr = data.ports;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.kpiThresholds).to.be.a(Otpixel.KpiThresholds);
                  expect(data.kpiThresholds.lowerThres).to.be.a('number');
              expect(data.kpiThresholds.lowerThres).to.be(0.0);
              expect(data.kpiThresholds.upperThres).to.be.a('number');
              expect(data.kpiThresholds.upperThres).to.be(0.0);
            expect(data.operation).to.be.a(Otpixel.KpiOperation);
                  expect(data.operation.mode).to.be.a('string');
              expect(data.operation.mode).to.be("");
              expect(data.operation.staticMode).to.be.a(Otpixel.KpiOperationStatic);
                    expect(data.operation.staticMode.value).to.be.a('number');
                expect(data.operation.staticMode.value).to.be(0.0);
                expect(data.operation.staticMode.lastUpdate).to.be.a('number');
                expect(data.operation.staticMode.lastUpdate).to.be("0");
              expect(data.operation.scheduledMode).to.be.a(Otpixel.KpiOperationScheduled);
                    expect(data.operation.scheduledMode.idRef).to.be.a('string');
                expect(data.operation.scheduledMode.idRef).to.be("");
                expect(data.operation.scheduledMode.type).to.be.a('string');
                expect(data.operation.scheduledMode.type).to.be("");
                expect(data.operation.scheduledMode.searchforValue).to.be.a('string');
                expect(data.operation.scheduledMode.searchforValue).to.be("");
              expect(data.operation.dynamicMode).to.be.a(Otpixel.KpiOperationDynamic);
                    expect(data.operation.dynamicMode.inputEndPoint).to.be.a(Otpixel.InputEndpoint);
                      expect(data.operation.dynamicMode.inputEndPoint.url).to.be.a('string');
                  expect(data.operation.dynamicMode.inputEndPoint.url).to.be("");
                  expect(data.operation.dynamicMode.inputEndPoint.type).to.be.a('string');
                  expect(data.operation.dynamicMode.inputEndPoint.type).to.be("");
                  expect(data.operation.dynamicMode.inputEndPoint.operation).to.be.a('string');
                  expect(data.operation.dynamicMode.inputEndPoint.operation).to.be("");
                  expect(data.operation.dynamicMode.inputEndPoint.body).to.be.a(Object);
                  expect(data.operation.dynamicMode.inputEndPoint.body).to.be();
                  {
                    let dataCtr = data.operation.dynamicMode.inputEndPoint.headers;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Otpixel.InputHeader);
                      expect(data.key).to.be.a('string');
                      expect(data.key).to.be("");
                      expect(data.value).to.be.a('string');
                      expect(data.value).to.be("");
                    }
                  }
                expect(data.operation.dynamicMode.searchforValue).to.be.a('string');
                expect(data.operation.dynamicMode.searchforValue).to.be("");
                expect(data.operation.dynamicMode.serchforTimeStampUnix).to.be.a('string');
                expect(data.operation.dynamicMode.serchforTimeStampUnix).to.be("");
                expect(data.operation.dynamicMode.searchforTimeStampIso8601).to.be.a('string');
                expect(data.operation.dynamicMode.searchforTimeStampIso8601).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
