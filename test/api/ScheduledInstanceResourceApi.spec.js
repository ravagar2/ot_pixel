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

  beforeEach(function() {
    instance = new Otpixel.ScheduledInstanceResourceApi();
  });

  describe('(package)', function() {
    describe('ScheduledInstanceResourceApi', function() {
      describe('createScheduledInstance', function() {
        it('should call createScheduledInstance successfully', function(done) {
          // TODO: uncomment, update parameter values for createScheduledInstance call and complete the assertions
          /*
          var body = new Otpixel.ScheduledInstance();
          body.id = "";
          body.idRef = "";
          body.name = "";
          body.description = "";
          body.mode = "";
          body.user = "";
          body.input = [new Otpixel.InstanceInputItem()];
          body.input[0].name = "";
          body.input[0].category = "";
          body.input[0].type = "";
          body.input[0].description = "";
          body.input[0].metadata = ;
          body.input[0].options = [new Otpixel.InstanceInputOptionItem()];
          body.input[0].options[0].name = "";
          body.input[0].options[0].type = "";
          body.input[0].options[0].description = "";
          body.input[0].options[0].value = ;
          body.forceinput = [new Otpixel.InstanceForceInputItem()];
          body.forceinput[0].name = "";
          body.forceinput[0].type = "";
          body.forceinput[0].description = "";
          body.forceinput[0].metadata = ;
          body.forceinput[0].value = ;
          body.output = [new Otpixel.InstanceOutputItem()];
          body.output[0].name = "";
          body.output[0].category = "";
          body.output[0].type = "";
          body.output[0].description = "";
          body.output[0].metadata = ;
          body.output[0].options = [new Otpixel.InstanceOutputOptionItem()];
          body.output[0].options[0].name = "";
          body.output[0].options[0].type = "";
          body.output[0].options[0].description = "";
          body.output[0].options[0].value = ;
          body.logging = [new Otpixel.InstanceLoggingItem()];
          body.logging[0].name = "";
          body.logging[0].category = "";
          body.logging[0].type = "";
          body.logging[0].description = "";
          body.logging[0].metadata = ;
          body.logging[0].options = [new Otpixel.InstanceLoggingOptionItem()];
          body.logging[0].options[0].name = "";
          body.logging[0].options[0].type = "";
          body.logging[0].options[0].description = "";
          body.logging[0].options[0].value = ;
          body.creation = "0";
          body.start = "0";
          body.otStatus = "";
          body.dockerId = "";
          body.active = false;
          body.scheduleInfo = new Otpixel.ScheduleInfo();
          body.scheduleInfo.unit = "";
          body.scheduleInfo.value = 0;
          body.scheduleInfo.start = "0";
          body.lastEnd = "0";

          instance.createScheduledInstance(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.Instance);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.idRef).to.be.a('string');
            expect(data.idRef).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.mode).to.be.a('string');
            expect(data.mode).to.be("");
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            {
              let dataCtr = data.input;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceInputItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Otpixel.InstanceInputOptionItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.value).to.be.a(Object);
                    expect(data.value).to.be();
                  }
                }
              }
            }
            {
              let dataCtr = data.forceinput;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceForceInputItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                expect(data.value).to.be.a(Object);
                expect(data.value).to.be();
              }
            }
            {
              let dataCtr = data.output;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceOutputItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Otpixel.InstanceOutputOptionItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.value).to.be.a(Object);
                    expect(data.value).to.be();
                  }
                }
              }
            }
            {
              let dataCtr = data.logging;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceLoggingItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Otpixel.InstanceLoggingOptionItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.value).to.be.a(Object);
                    expect(data.value).to.be();
                  }
                }
              }
            }
            expect(data.creation).to.be.a('number');
            expect(data.creation).to.be("0");
            expect(data.start).to.be.a('number');
            expect(data.start).to.be("0");
            expect(data.otStatus).to.be.a('string');
            expect(data.otStatus).to.be("");
            expect(data.dockerId).to.be.a('string');
            expect(data.dockerId).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteScheduledInstance', function() {
        it('should call deleteScheduledInstance successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteScheduledInstance call
          /*
          var id = "id_example";

          instance.deleteScheduledInstance(id, function(error, data, response) {
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
      describe('getScheduledInstance', function() {
        it('should call getScheduledInstance successfully', function(done) {
          // TODO: uncomment, update parameter values for getScheduledInstance call and complete the assertions
          /*
          var id = "id_example";

          instance.getScheduledInstance(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.ScheduledInstance);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.idRef).to.be.a('string');
            expect(data.idRef).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.mode).to.be.a('string');
            expect(data.mode).to.be("");
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            {
              let dataCtr = data.input;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceInputItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Otpixel.InstanceInputOptionItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.value).to.be.a(Object);
                    expect(data.value).to.be();
                  }
                }
              }
            }
            {
              let dataCtr = data.forceinput;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceForceInputItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                expect(data.value).to.be.a(Object);
                expect(data.value).to.be();
              }
            }
            {
              let dataCtr = data.output;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceOutputItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Otpixel.InstanceOutputOptionItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.value).to.be.a(Object);
                    expect(data.value).to.be();
                  }
                }
              }
            }
            {
              let dataCtr = data.logging;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceLoggingItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Otpixel.InstanceLoggingOptionItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.value).to.be.a(Object);
                    expect(data.value).to.be();
                  }
                }
              }
            }
            expect(data.creation).to.be.a('number');
            expect(data.creation).to.be("0");
            expect(data.start).to.be.a('number');
            expect(data.start).to.be("0");
            expect(data.otStatus).to.be.a('string');
            expect(data.otStatus).to.be("");
            expect(data.dockerId).to.be.a('string');
            expect(data.dockerId).to.be("");
            expect(data.active).to.be.a('boolean');
            expect(data.active).to.be(false);
            expect(data.scheduleInfo).to.be.a(Otpixel.ScheduleInfo);
                  expect(data.scheduleInfo.unit).to.be.a('string');
              expect(data.scheduleInfo.unit).to.be("");
              expect(data.scheduleInfo.value).to.be.a('number');
              expect(data.scheduleInfo.value).to.be(0);
              expect(data.scheduleInfo.start).to.be.a('number');
              expect(data.scheduleInfo.start).to.be("0");
            expect(data.lastEnd).to.be.a('number');
            expect(data.lastEnd).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listScheduledInstances', function() {
        it('should call listScheduledInstances successfully', function(done) {
          // TODO: uncomment, update parameter values for listScheduledInstances call and complete the assertions
          /*
          var opts = {};
          opts.idRef = "idRef_example";
          opts.user = "user_example";
          opts.status = "status_example";

          instance.listScheduledInstances(opts, function(error, data, response) {
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
              expect(data).to.be.a(Otpixel.ScheduledInstance);
              expect(data.id).to.be.a('string');
              expect(data.id).to.be("");
              expect(data.idRef).to.be.a('string');
              expect(data.idRef).to.be("");
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.mode).to.be.a('string');
              expect(data.mode).to.be("");
              expect(data.user).to.be.a('string');
              expect(data.user).to.be("");
              {
                let dataCtr = data.input;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Otpixel.InstanceInputItem);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.category).to.be.a('string');
                  expect(data.category).to.be("");
                  expect(data.type).to.be.a('string');
                  expect(data.type).to.be("");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  expect(data.metadata).to.be.a(Object);
                  expect(data.metadata).to.be();
                  {
                    let dataCtr = data.options;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Otpixel.InstanceInputOptionItem);
                      expect(data.name).to.be.a('string');
                      expect(data.name).to.be("");
                      expect(data.type).to.be.a('string');
                      expect(data.type).to.be("");
                      expect(data.description).to.be.a('string');
                      expect(data.description).to.be("");
                      expect(data.value).to.be.a(Object);
                      expect(data.value).to.be();
                    }
                  }
                }
              }
              {
                let dataCtr = data.forceinput;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Otpixel.InstanceForceInputItem);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.type).to.be.a('string');
                  expect(data.type).to.be("");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  expect(data.metadata).to.be.a(Object);
                  expect(data.metadata).to.be();
                  expect(data.value).to.be.a(Object);
                  expect(data.value).to.be();
                }
              }
              {
                let dataCtr = data.output;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Otpixel.InstanceOutputItem);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.category).to.be.a('string');
                  expect(data.category).to.be("");
                  expect(data.type).to.be.a('string');
                  expect(data.type).to.be("");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  expect(data.metadata).to.be.a(Object);
                  expect(data.metadata).to.be();
                  {
                    let dataCtr = data.options;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Otpixel.InstanceOutputOptionItem);
                      expect(data.name).to.be.a('string');
                      expect(data.name).to.be("");
                      expect(data.type).to.be.a('string');
                      expect(data.type).to.be("");
                      expect(data.description).to.be.a('string');
                      expect(data.description).to.be("");
                      expect(data.value).to.be.a(Object);
                      expect(data.value).to.be();
                    }
                  }
                }
              }
              {
                let dataCtr = data.logging;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Otpixel.InstanceLoggingItem);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.category).to.be.a('string');
                  expect(data.category).to.be("");
                  expect(data.type).to.be.a('string');
                  expect(data.type).to.be("");
                  expect(data.description).to.be.a('string');
                  expect(data.description).to.be("");
                  expect(data.metadata).to.be.a(Object);
                  expect(data.metadata).to.be();
                  {
                    let dataCtr = data.options;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Otpixel.InstanceLoggingOptionItem);
                      expect(data.name).to.be.a('string');
                      expect(data.name).to.be("");
                      expect(data.type).to.be.a('string');
                      expect(data.type).to.be("");
                      expect(data.description).to.be.a('string');
                      expect(data.description).to.be("");
                      expect(data.value).to.be.a(Object);
                      expect(data.value).to.be();
                    }
                  }
                }
              }
              expect(data.creation).to.be.a('number');
              expect(data.creation).to.be("0");
              expect(data.start).to.be.a('number');
              expect(data.start).to.be("0");
              expect(data.otStatus).to.be.a('string');
              expect(data.otStatus).to.be("");
              expect(data.dockerId).to.be.a('string');
              expect(data.dockerId).to.be("");
              expect(data.active).to.be.a('boolean');
              expect(data.active).to.be(false);
              expect(data.scheduleInfo).to.be.a(Otpixel.ScheduleInfo);
                    expect(data.scheduleInfo.unit).to.be.a('string');
                expect(data.scheduleInfo.unit).to.be("");
                expect(data.scheduleInfo.value).to.be.a('number');
                expect(data.scheduleInfo.value).to.be(0);
                expect(data.scheduleInfo.start).to.be.a('number');
                expect(data.scheduleInfo.start).to.be("0");
              expect(data.lastEnd).to.be.a('number');
              expect(data.lastEnd).to.be("0");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateScheduledInstance', function() {
        it('should call updateScheduledInstance successfully', function(done) {
          // TODO: uncomment, update parameter values for updateScheduledInstance call and complete the assertions
          /*
          var body = new Otpixel.ScheduledInstance();
          body.id = "";
          body.idRef = "";
          body.name = "";
          body.description = "";
          body.mode = "";
          body.user = "";
          body.input = [new Otpixel.InstanceInputItem()];
          body.input[0].name = "";
          body.input[0].category = "";
          body.input[0].type = "";
          body.input[0].description = "";
          body.input[0].metadata = ;
          body.input[0].options = [new Otpixel.InstanceInputOptionItem()];
          body.input[0].options[0].name = "";
          body.input[0].options[0].type = "";
          body.input[0].options[0].description = "";
          body.input[0].options[0].value = ;
          body.forceinput = [new Otpixel.InstanceForceInputItem()];
          body.forceinput[0].name = "";
          body.forceinput[0].type = "";
          body.forceinput[0].description = "";
          body.forceinput[0].metadata = ;
          body.forceinput[0].value = ;
          body.output = [new Otpixel.InstanceOutputItem()];
          body.output[0].name = "";
          body.output[0].category = "";
          body.output[0].type = "";
          body.output[0].description = "";
          body.output[0].metadata = ;
          body.output[0].options = [new Otpixel.InstanceOutputOptionItem()];
          body.output[0].options[0].name = "";
          body.output[0].options[0].type = "";
          body.output[0].options[0].description = "";
          body.output[0].options[0].value = ;
          body.logging = [new Otpixel.InstanceLoggingItem()];
          body.logging[0].name = "";
          body.logging[0].category = "";
          body.logging[0].type = "";
          body.logging[0].description = "";
          body.logging[0].metadata = ;
          body.logging[0].options = [new Otpixel.InstanceLoggingOptionItem()];
          body.logging[0].options[0].name = "";
          body.logging[0].options[0].type = "";
          body.logging[0].options[0].description = "";
          body.logging[0].options[0].value = ;
          body.creation = "0";
          body.start = "0";
          body.otStatus = "";
          body.dockerId = "";
          body.active = false;
          body.scheduleInfo = new Otpixel.ScheduleInfo();
          body.scheduleInfo.unit = "";
          body.scheduleInfo.value = 0;
          body.scheduleInfo.start = "0";
          body.lastEnd = "0";

          instance.updateScheduledInstance(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Otpixel.ScheduledInstance);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.idRef).to.be.a('string');
            expect(data.idRef).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.mode).to.be.a('string');
            expect(data.mode).to.be("");
            expect(data.user).to.be.a('string');
            expect(data.user).to.be("");
            {
              let dataCtr = data.input;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceInputItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Otpixel.InstanceInputOptionItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.value).to.be.a(Object);
                    expect(data.value).to.be();
                  }
                }
              }
            }
            {
              let dataCtr = data.forceinput;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceForceInputItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                expect(data.value).to.be.a(Object);
                expect(data.value).to.be();
              }
            }
            {
              let dataCtr = data.output;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceOutputItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Otpixel.InstanceOutputOptionItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.value).to.be.a(Object);
                    expect(data.value).to.be();
                  }
                }
              }
            }
            {
              let dataCtr = data.logging;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Otpixel.InstanceLoggingItem);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.category).to.be.a('string');
                expect(data.category).to.be("");
                expect(data.type).to.be.a('string');
                expect(data.type).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                expect(data.metadata).to.be.a(Object);
                expect(data.metadata).to.be();
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Otpixel.InstanceLoggingOptionItem);
                    expect(data.name).to.be.a('string');
                    expect(data.name).to.be("");
                    expect(data.type).to.be.a('string');
                    expect(data.type).to.be("");
                    expect(data.description).to.be.a('string');
                    expect(data.description).to.be("");
                    expect(data.value).to.be.a(Object);
                    expect(data.value).to.be();
                  }
                }
              }
            }
            expect(data.creation).to.be.a('number');
            expect(data.creation).to.be("0");
            expect(data.start).to.be.a('number');
            expect(data.start).to.be("0");
            expect(data.otStatus).to.be.a('string');
            expect(data.otStatus).to.be("");
            expect(data.dockerId).to.be.a('string');
            expect(data.dockerId).to.be("");
            expect(data.active).to.be.a('boolean');
            expect(data.active).to.be(false);
            expect(data.scheduleInfo).to.be.a(Otpixel.ScheduleInfo);
                  expect(data.scheduleInfo.unit).to.be.a('string');
              expect(data.scheduleInfo.unit).to.be("");
              expect(data.scheduleInfo.value).to.be.a('number');
              expect(data.scheduleInfo.value).to.be(0);
              expect(data.scheduleInfo.start).to.be.a('number');
              expect(data.scheduleInfo.start).to.be("0");
            expect(data.lastEnd).to.be.a('number');
            expect(data.lastEnd).to.be("0");

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
