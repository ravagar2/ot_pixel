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
    instance = new Otpixel.ModelResourceApi();
  });

  describe('(package)', function() {
    describe('ModelResourceApi', function() {
      describe('createModel', function() {
        it('should call createModel successfully', function(done) {
          // TODO: uncomment, update parameter values for createModel call and complete the assertions
          /*
          var body = new Otpixel.Model();
          body.id = "";
          body.name = "";
          body.type = "";
          body.category = "";
          body.author = "";
          body.description = "";
          body.urls = new Otpixel.ServiceUrls();
          body.urls.serviceUrl = "";
          body.urls.dockerImageUrl = "";
          body.urls.dashboardUrl = "";
          body.urls.statusUrl = "";
          body.urls.infoUrl = "";
          body.operation = "";
          body.creation = "0";
          body.ports = [""];
          body.schedulable = false;
          body.inputDatasources = [new Otpixel.InputDataSource()];
          body.inputDatasources[0].name = "";
          body.inputDatasources[0].description = "";
          body.inputDatasources[0].serviceUrl = "";
          body.inputFormat = "";
          body.inputType = "";
          body.outputFormat = "";
          body.outputType = "";
          body.cpu = "";
          body.ram = "";
          body.status = "";
          body.licensing = "";
          body.otDashboardId = "";

          instance.createModel(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.Model);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");
            expect(data.category).to.be.a('string');
            expect(data.category).to.be("");
            expect(data.author).to.be.a('string');
            expect(data.author).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.urls).to.be.a(Otpixel.ServiceUrls);
                  expect(data.urls.serviceUrl).to.be.a('string');
              expect(data.urls.serviceUrl).to.be("");
              expect(data.urls.dockerImageUrl).to.be.a('string');
              expect(data.urls.dockerImageUrl).to.be("");
              expect(data.urls.dashboardUrl).to.be.a('string');
              expect(data.urls.dashboardUrl).to.be("");
              expect(data.urls.statusUrl).to.be.a('string');
              expect(data.urls.statusUrl).to.be("");
              expect(data.urls.infoUrl).to.be.a('string');
              expect(data.urls.infoUrl).to.be("");
            expect(data.operation).to.be.a('string');
            expect(data.operation).to.be("");
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
            expect(data.schedulable).to.be.a('boolean');
            expect(data.schedulable).to.be(false);
            {
              let dataCtr = data.inputDatasources;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InputDataSource);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.serviceUrl).to.be.a('string');
                expect(data.serviceUrl).to.be("");
              }
            }
            expect(data.inputFormat).to.be.a('string');
            expect(data.inputFormat).to.be("");
            expect(data.inputType).to.be.a('string');
            expect(data.inputType).to.be("");
            expect(data.outputFormat).to.be.a('string');
            expect(data.outputFormat).to.be("");
            expect(data.outputType).to.be.a('string');
            expect(data.outputType).to.be("");
            expect(data.cpu).to.be.a('string');
            expect(data.cpu).to.be("");
            expect(data.ram).to.be.a('string');
            expect(data.ram).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.licensing).to.be.a('string');
            expect(data.licensing).to.be("");
            expect(data.otDashboardId).to.be.a('string');
            expect(data.otDashboardId).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteModel', function() {
        it('should call deleteModel successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteModel call
          /*
          var id = "id_example";

          instance.deleteModel(id, function(error, data, response) {
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
      describe('getModel', function() {
        it('should call getModel successfully', function(done) {
          // TODO: uncomment, update parameter values for getModel call and complete the assertions
          /*
          var id = "id_example";

          instance.getModel(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.Model);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");
            expect(data.category).to.be.a('string');
            expect(data.category).to.be("");
            expect(data.author).to.be.a('string');
            expect(data.author).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.urls).to.be.a(Otpixel.ServiceUrls);
                  expect(data.urls.serviceUrl).to.be.a('string');
              expect(data.urls.serviceUrl).to.be("");
              expect(data.urls.dockerImageUrl).to.be.a('string');
              expect(data.urls.dockerImageUrl).to.be("");
              expect(data.urls.dashboardUrl).to.be.a('string');
              expect(data.urls.dashboardUrl).to.be("");
              expect(data.urls.statusUrl).to.be.a('string');
              expect(data.urls.statusUrl).to.be("");
              expect(data.urls.infoUrl).to.be.a('string');
              expect(data.urls.infoUrl).to.be("");
            expect(data.operation).to.be.a('string');
            expect(data.operation).to.be("");
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
            expect(data.schedulable).to.be.a('boolean');
            expect(data.schedulable).to.be(false);
            {
              let dataCtr = data.inputDatasources;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InputDataSource);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.serviceUrl).to.be.a('string');
                expect(data.serviceUrl).to.be("");
              }
            }
            expect(data.inputFormat).to.be.a('string');
            expect(data.inputFormat).to.be("");
            expect(data.inputType).to.be.a('string');
            expect(data.inputType).to.be("");
            expect(data.outputFormat).to.be.a('string');
            expect(data.outputFormat).to.be("");
            expect(data.outputType).to.be.a('string');
            expect(data.outputType).to.be("");
            expect(data.cpu).to.be.a('string');
            expect(data.cpu).to.be("");
            expect(data.ram).to.be.a('string');
            expect(data.ram).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.licensing).to.be.a('string');
            expect(data.licensing).to.be("");
            expect(data.otDashboardId).to.be.a('string');
            expect(data.otDashboardId).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listModels', function() {
        it('should call listModels successfully', function(done) {
          // TODO: uncomment, update parameter values for listModels call and complete the assertions
          /*
          var opts = {};
          opts.status = "status_example";

          instance.listModels(opts, function(error, data, response) {
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
              expect(data).to.be.a(Otpixel.Model);
              expect(data.id).to.be.a('string');
              expect(data.id).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.type).to.be.a('string');
              expect(data.type).to.be("");
              expect(data.category).to.be.a('string');
              expect(data.category).to.be("");
              expect(data.author).to.be.a('string');
              expect(data.author).to.be("");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.urls).to.be.a(Otpixel.ServiceUrls);
                    expect(data.urls.serviceUrl).to.be.a('string');
                expect(data.urls.serviceUrl).to.be("");
                expect(data.urls.dockerImageUrl).to.be.a('string');
                expect(data.urls.dockerImageUrl).to.be("");
                expect(data.urls.dashboardUrl).to.be.a('string');
                expect(data.urls.dashboardUrl).to.be("");
                expect(data.urls.statusUrl).to.be.a('string');
                expect(data.urls.statusUrl).to.be("");
                expect(data.urls.infoUrl).to.be.a('string');
                expect(data.urls.infoUrl).to.be("");
              expect(data.operation).to.be.a('string');
              expect(data.operation).to.be("");
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
              expect(data.schedulable).to.be.a('boolean');
              expect(data.schedulable).to.be(false);
              {
                let dataCtr = data.inputDatasources;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Otpixel.InputDataSource);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  expect(data.serviceUrl).to.be.a('string');
                  expect(data.serviceUrl).to.be("");
                }
              }
              expect(data.inputFormat).to.be.a('string');
              expect(data.inputFormat).to.be("");
              expect(data.inputType).to.be.a('string');
              expect(data.inputType).to.be("");
              expect(data.outputFormat).to.be.a('string');
              expect(data.outputFormat).to.be("");
              expect(data.outputType).to.be.a('string');
              expect(data.outputType).to.be("");
              expect(data.cpu).to.be.a('string');
              expect(data.cpu).to.be("");
              expect(data.ram).to.be.a('string');
              expect(data.ram).to.be("");
              expect(data.status).to.be.a('string');
              expect(data.status).to.be("");
              expect(data.licensing).to.be.a('string');
              expect(data.licensing).to.be("");
              expect(data.otDashboardId).to.be.a('string');
              expect(data.otDashboardId).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateModel', function() {
        it('should call updateModel successfully', function(done) {
          // TODO: uncomment, update parameter values for updateModel call and complete the assertions
          /*
          var body = new Otpixel.Model();
          body.id = "";
          body.name = "";
          body.type = "";
          body.category = "";
          body.author = "";
          body.description = "";
          body.urls = new Otpixel.ServiceUrls();
          body.urls.serviceUrl = "";
          body.urls.dockerImageUrl = "";
          body.urls.dashboardUrl = "";
          body.urls.statusUrl = "";
          body.urls.infoUrl = "";
          body.operation = "";
          body.creation = "0";
          body.ports = [""];
          body.schedulable = false;
          body.inputDatasources = [new Otpixel.InputDataSource()];
          body.inputDatasources[0].name = "";
          body.inputDatasources[0].description = "";
          body.inputDatasources[0].serviceUrl = "";
          body.inputFormat = "";
          body.inputType = "";
          body.outputFormat = "";
          body.outputType = "";
          body.cpu = "";
          body.ram = "";
          body.status = "";
          body.licensing = "";
          body.otDashboardId = "";

          instance.updateModel(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.Model);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.type).to.be.a('string');
            expect(data.type).to.be("");
            expect(data.category).to.be.a('string');
            expect(data.category).to.be("");
            expect(data.author).to.be.a('string');
            expect(data.author).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.urls).to.be.a(Otpixel.ServiceUrls);
                  expect(data.urls.serviceUrl).to.be.a('string');
              expect(data.urls.serviceUrl).to.be("");
              expect(data.urls.dockerImageUrl).to.be.a('string');
              expect(data.urls.dockerImageUrl).to.be("");
              expect(data.urls.dashboardUrl).to.be.a('string');
              expect(data.urls.dashboardUrl).to.be("");
              expect(data.urls.statusUrl).to.be.a('string');
              expect(data.urls.statusUrl).to.be("");
              expect(data.urls.infoUrl).to.be.a('string');
              expect(data.urls.infoUrl).to.be("");
            expect(data.operation).to.be.a('string');
            expect(data.operation).to.be("");
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
            expect(data.schedulable).to.be.a('boolean');
            expect(data.schedulable).to.be(false);
            {
              let dataCtr = data.inputDatasources;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InputDataSource);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.serviceUrl).to.be.a('string');
                expect(data.serviceUrl).to.be("");
              }
            }
            expect(data.inputFormat).to.be.a('string');
            expect(data.inputFormat).to.be("");
            expect(data.inputType).to.be.a('string');
            expect(data.inputType).to.be("");
            expect(data.outputFormat).to.be.a('string');
            expect(data.outputFormat).to.be("");
            expect(data.outputType).to.be.a('string');
            expect(data.outputType).to.be("");
            expect(data.cpu).to.be.a('string');
            expect(data.cpu).to.be("");
            expect(data.ram).to.be.a('string');
            expect(data.ram).to.be("");
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("");
            expect(data.licensing).to.be.a('string');
            expect(data.licensing).to.be("");
            expect(data.otDashboardId).to.be.a('string');
            expect(data.otDashboardId).to.be("");

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
